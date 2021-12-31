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
function throttle(fn: Function, wait: number = 500, option: any = {}): Function {
  let timer: any = null;
  let lastTime: number = option?.leading !== false ? 0 : +new Date(); // 节流期间上次调用fn的时间
  let inTime: any = null; // 每次开始进行节流的时间, 节流结束时置null
  return function () {
    const context = this;
    const args = arguments;
    const now: number = +new Date();
    if (!inTime) lastTime = option?.leading !== false ? 0 : now;

    inTime = inTime || now;
    if (now - lastTime > wait) {
      fn.apply(context, args);
      lastTime = now;
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      option?.trailing !== false && fn.apply(context, args); // 结束后[wait]毫秒调用
      timer = inTime = null;
    }, wait);
  };
}

export default throttle;
