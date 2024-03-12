
import notify from './notify';
/**
 * 基础异常
 */
export class BMScriptError extends Error { }

/**
 * 代码执行未结束
 */
export class ScriptNotFinishedError extends BMScriptError { }

/**
 * 目标网页未匹配
 */
export class LocationUnmatchError extends BMScriptError { }

/**
 * 异常默认拦截
 * @param error 异常
 */
export function handleDefineError(error: Error) {
  if (error instanceof BMScriptError) {
    if (error instanceof ScriptNotFinishedError) {
      notify.warning(error.message);
    }
  } else {
    notify.failure('Unknown error: ' + error.message);
  }
  console.error(error);
}