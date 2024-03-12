/**
 * 元素查询
 * @param selectors 路径xpan
 * @returns 
 */
export function q<T extends Element = Element>(selectors: string): T | null {
  return document.querySelector<T>(selectors);
}

/**
 * 多元素查询
 * @param selectors 路径xpan
 * @returns 
 */
export function qa<T extends Element = Element>(selectors: string): T[] | null {
  return Array.from(document.querySelectorAll<T>(selectors));
}