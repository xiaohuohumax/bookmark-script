import axios from 'axios';
import FileSaver from 'file-saver';
import JSZip from 'jszip';
import pLimit from 'p-limit';

/**
 * 压缩包文件
 */
export class DFile {
  constructor(public name: string, public data: Blob | Promise<Blob>) { }
}

/**
 * 文件下载任务基类
 */
export class DTask {
  /**
   * 待下载列表
   */
  private files: DFile[] = [];

  /**
   * 开始下载
   * @returns 
   */
  async start() {
    await this.run();
    return this.files;
  }
  /**
   * 下载本体自行实现
   */
  async run() {
    throw new Error('请继承此类, 自行重写 run 方法, 自行实现下载过程');
  }
  /**
   * 将下载完成的文件放入队列
   * @param dFile 下载完成的文件
   */
  saveFile(dFile: DFile) {
    this.files.push(dFile);
  }
}

/**
 * 通用Blob下载任务, 下载图片等资源
 */
export class DBlobUrlTask extends DTask {

  constructor(private url: string, private method: string = 'GET') {
    super();
  }

  async run() {
    try {
      const { data } = await axios({
        method: this.method,
        url: this.url,
        responseType: 'blob'
      });
      const url = this.url.split('/').pop();
      url && this.saveFile(new DFile(url, data));
    } catch (_) {
    }
  }
}

/**
 * 通过下载任务下载并打包文件
 * @param dTask 下载任务
 * @param name 保存名称
 * @param dLimit 并发限制
 */
export async function downloadAndZip(dTask: DTask[] = [], name: string = 'download', dLimit: number = 10) {
  const limit = pLimit(dLimit);

  const zip = new JSZip();

  const tasks = dTask.map(task => limit(() => task.start()));
  // 异步执行下载任务
  (await Promise.all(tasks))
    .flat(1)
    .forEach(item => zip.file(item.name, item.data));
  // 打包文件
  FileSaver.saveAs(await zip.generateAsync({ type: 'blob' }), name + '.zip');
}