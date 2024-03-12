/**
 * #name 显示当前时间
 * #icon ./clock.png
 * #version 1.0.0
 */

import { swal, BMScript } from '#/utils';
import { handleDefineError } from '#/utils/error';

import dConfig from './clock.json';

const script = BMScript.init({ match: [/.*/ig] });

script.run(async () => {

  const time = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
  const timHtml = `<p>当前时间:${time}</p><p>配置信息:${JSON.stringify(dConfig)}</p>`;
  swal.fire({ title: '提示', icon: 'success', html: timHtml, confirmButtonText: '确定' });

}).catch(handleDefineError);