/**
 * 节流函数
 * 在防抖函数的基础上 [每n毫秒] 执行一次fn
 * @description 在[wait]毫秒内只执行一次fn的方法
 * @param fn {Function}   实际要执行的函数
 * @param wait {Number}  需要节流的毫秒
 * @param least {Number}  节流时间，单位毫秒（ms）
 *
 * @return {Function}
 */
function throttle(fn: () => void, wait: number = 500, least: number = 1000) {
  let timer: any = null;
  let lastTime: number = +new Date();
  return function () {
    const context = this;
    const args = arguments;
    const now: number = +new Date();
    clearTimeout(timer);
    if (now - lastTime > least) {
      fn.apply(context, args);
      lastTime = now;
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, wait);
    }
  };
}

export default throttle;
