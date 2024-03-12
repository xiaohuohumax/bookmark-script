import crypto from 'crypto-js';

/**
 * 数据SHA256
 * @param data 数据
 * @returns 
 */
export function hash(data: string) {
  return crypto.SHA256(data);
}