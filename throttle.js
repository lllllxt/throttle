(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.throttle = factory());
}(this, (function () { 'use strict';

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
  function throttle(fn) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var least = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
    var timer = null;
    var lastTime = +new Date();
    return function () {
      var context = this;
      var args = arguments;
      var now = +new Date();
      clearTimeout(timer);

      if (now - lastTime > least) {
        fn.apply(context, args);
        lastTime = now;
      } else {
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      }
    };
  }

  return throttle;

})));
