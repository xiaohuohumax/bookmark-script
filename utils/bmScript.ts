import meta from 'bookmark:meta';
import notify from './notify';
import { hash } from './str';
import { ScriptNotFinishedError, LocationUnmatchError } from './error';

/**
 * 脚本配置
 */
export interface BMScriptOptions {
  match?: RegExp[]
  unmatchMsg: string
  showMeta?: boolean
  leaveAlert?: boolean
}

/**
 * 默认配置
 */
export const DEFINE_OPTIONS: Required<BMScriptOptions> = {
  match: [/.*/i],
  unmatchMsg: '请到目标网页再试试!!!',
  showMeta: true,
  leaveAlert: true
};

/**
 * 回调函数
 */
export type BMScriptRunCallback<T> = () => Promise<T> | T

/**
 * 脚本唯一id
 */
export const id: string = 'bm_' + hash(JSON.stringify(meta));

/**
 * 脚本
 */
export class BMScript {

  public static options: Required<BMScriptOptions>;

  static {
    if (!window.__bms_running_status__) {
      window.__bms_running_status__ = {};
    }
    if (!Object.keys(window.__bms_running_status__).includes(id)) {
      window.__bms_running_status__[id] = false;
    }
    BMScript.init({});
  }

  /**
   * 初始化
   * @param options 配置
   * @returns 
   */
  public static init(options?: Partial<BMScriptOptions>) {
    BMScript.options = Object.assign(DEFINE_OPTIONS, options);
    return BMScript;
  }

  /**
   * 执行脚本
   * @param callback 回调
   * @returns 
   */
  public static async run<T>(callback: BMScriptRunCallback<T>): Promise<T> {
    const { leaveAlert, showMeta, match, unmatchMsg } = BMScript.options;
    // 脚本未执行完
    if (window.__bms_running_status__[id]) {
      throw new ScriptNotFinishedError('Script not finished error!!!');
    }

    window.__bms_running_status__[id] = true;

    // 执行中关闭网页告警
    if (leaveAlert) {
      window.addEventListener('beforeunload', (event) => {
        if (window.__bms_running_status__[id]) {
          event.preventDefault();
          event.returnValue = '$';
          return '$';
        }
      });
    }
    // 显示脚本信息
    if (showMeta) {
      console.log(`%cwelcome use ${meta.name}!`, 'color:#1e80ff;font-size:16px;');
      let metaInfo = meta.name;
      meta.description && (metaInfo += `[${meta.description}]`);
      meta.version && (metaInfo += `(${meta.version})`);
      console.log(`%c${metaInfo}`, 'color:#1e80ff;font-size:14px;');
    }

    // 脚本未匹配目标网页
    const mRes = match.find(re => location.href.match(re) != null);
    if (mRes == null) {
      notify.failure(unmatchMsg, { plainText: false });
      window.__bms_running_status__[id] = false;
      throw new LocationUnmatchError('Location unmatch error!!!');
    }
    try {
      // 执行脚本本体
      return await callback();
    } finally {
      window.__bms_running_status__[id] = false;
    }
  }
}