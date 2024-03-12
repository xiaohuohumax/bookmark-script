/**
 * 休眠
 * @param ms 休眠时间
 * @returns 
 */
export function sleep(ms: number) {
  return new Promise(res => setTimeout(res, ms));
}