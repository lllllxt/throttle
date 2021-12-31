/**
 * 节流函数
 * 在防抖函数的基础上 [每n毫秒] 执行一次fn
 * @description 在[delay]毫秒内只执行一次fn的方法
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  延迟时间，单位是毫秒（ms）
 * @param least {Number}  节流时间，单位毫秒（ms）
 *
 * @return {Function}
 */
declare function throttle(fn: () => void, delay?: number, least?: number): () => void;
export default throttle;
