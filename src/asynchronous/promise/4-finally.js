// finally程序不论是状态转换为resolved,rejected后都会执行，主要用于添加清理代码，兜底专用
let p1 = Promise.resolve();
let p2 = Promise.reject();
let onFinally = function () {
    setTimeout(console.log, 0, 'finally');
};
p1.finally(onFinally);
p2.finally(onFinally);

// Promise.prototype.finally()方法返回一个新的Promise实例
