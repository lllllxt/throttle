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
function throttle(fn, delay = 500, least = 1000) {
    let timer = null;
    let lastTime = new Date()
    return function () {
        const context = this;
        const args = arguments;
        const now = new Date()
        clearTimeout(timer)
        if (now - lastTime > least) {
            fn.apply(context, args)
            lastTime = now
        } else {
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, delay);
        }
    };
}

export default throttle;