// 1. finally程序不论是状态转换为resolved,rejected后都会执行，主要用于添加清理代码，兜底专用
let p1 = Promise.resolve();
let p2 = Promise.reject();
let onFinally = function () {
    setTimeout(console.log, 0, 'finally');
};
p1.finally(onFinally);
p2.finally(onFinally);

// 2. Promise.prototype.finally()方法返回一个新的Promise实例, 返回值通常表现为父Promise的传递（resolved,rejected）
// let p1 = Promise.resolve('foo');

// let p2 = p1.finally();
// let p3 = p1.finally(() => {});
// let p4 = p1.finally(() => undefined);
// let p5 = p1.finally(() => Promise.resolve());
// let p6 = p1.finally(() => 'bar');
// let p7 = p1.finally(() => Promise.resolve('bar'));
// let p8 = p1.finally(() => Error('qux'));

// setTimeout(console.log, 0, p2); // Promise <resolved>: foo
// setTimeout(console.log, 0, p3); // Promise <resolved>: foo
// setTimeout(console.log, 0, p4); // Promise <resolved>: foo
// setTimeout(console.log, 0, p5); // Promise <resolved>: foo
// setTimeout(console.log, 0, p6); // Promise <resolved>: foo
// setTimeout(console.log, 0, p7); // Promise <resolved>: foo
// setTimeout(console.log, 0, p8); // Promise <resolved>: foo

// let p9 = p1.finally(() => {
//     throw 'error';
// });
// let p10 = p1.finally(() => Promise.reject());
// let p11 = p1.finally(() => new Promise(() => {}));

// setTimeout(console.log, 0, p9); // Promise <rejected>: error
// setTimeout(console.log, 0, p10); // Promise <rejected>: undefined
// setTimeout(console.log, 0, p11); // Promise <pengding>
