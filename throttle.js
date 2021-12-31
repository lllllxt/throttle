/* @lllllxt/throttle version 1.0.2, follow me on Github! @lllllxt */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.throttle = factory());
}(this, (function () { 'use strict';

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
  function throttle(fn) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var timer = null;
    var lastTime = (option === null || option === void 0 ? void 0 : option.leading) !== false ? 0 : +new Date(); // 节流期间上次调用fn的时间

    var inTime = null; // 每次开始进行节流的时间, 节流结束时置null

    return function () {
      var context = this;
      var args = arguments;
      var now = +new Date();
      if (!inTime) lastTime = (option === null || option === void 0 ? void 0 : option.leading) !== false ? 0 : now;
      inTime = inTime || now;

      if (now - lastTime > wait) {
        fn.apply(context, args);
        lastTime = now;
      }

      clearTimeout(timer);
      timer = setTimeout(function () {
        (option === null || option === void 0 ? void 0 : option.trailing) !== false && fn.apply(context, args); // 结束后[wait]毫秒调用

        timer = inTime = null;
      }, wait);
    };
  }

  return throttle;

})));
