/**
 * 节流函数  api用法和 Loadsh.throttle 一样
 * @description 在[wait]毫秒内只执行一次fn的方法
 * @param  {Function} fn 要节流的函数
 * @param  {number} wait 需要节流的毫秒数
 * @param  {Options} option 选项
 * @param  {boolean} option.leading 是否在节流开始前调用
 * @param  {boolean} option.trailing 是否在节流结束后调用
 * @returns {Function}
 */
declare function throttle(fn: Function, wait?: number, option?: any): Function;
export default throttle;
