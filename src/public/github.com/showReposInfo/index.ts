/**
 * #name Github仓库信息显示
 * #description 创建时间,修改时间等
 * #icon ../favicon.png
 * #version v1.0.1
 */

import axios from 'axios';

import { notify, swal, BMScript } from '#/utils';
import { handleDefineError } from '#/utils/error';

// 格式: https://api.github.com/repos/:user/:repos
const stateApi = 'https://api.github.com/repos';

const script = BMScript.init({
  match: [/https?:\/\/github.com\/[\w-]+\/[^/]+$/ig],
  unmatchMsg: '请到仓库页再试试 <br/>例如: https://github.com/:user/:repos'
});

script.run(async () => {

  const statRes = await axios({
    url: stateApi + location.pathname,
    method: 'get'
  });

  const statJson = JSON.stringify(statRes.data, undefined, 4);

  const res = await swal.fire({
    title: '统计信息',
    width: '50rem',
    icon: 'success',
    html: `<pre style="text-align:left;">${statJson}</pre>`,
    confirmButtonText: '复制'
  });

  if (!res.isConfirmed) {
    return;
  }

  if (navigator?.clipboard?.writeText) {
    navigator.clipboard.writeText(statJson);
    notify.success('已复制到粘贴板');
  } else {
    notify.failure('无法复制到粘贴板,请手动复制');
  }

}).catch(handleDefineError);