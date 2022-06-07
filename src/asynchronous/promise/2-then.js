// 1. Promise.prototype.then()是为Promise实例添加处理程序的主要方法，
// 接收两个参数，onResolved 处理程序和 onRejected 处理程序；分别在状态为resolved和rejected的时候只行
function onResolved(id) {
    setTimeout(console.log, 0, id, 'resolved');
}
function onRejected(id) {
    setTimeout(console.log, 0, id, 'rejected');
}
let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));
p1.then(
    () => onResolved('p1'),
    () => onRejected('p1')
);
p2.then(
    () => onResolved('p2'),
    () => onRejected('p2')
);

// 2. then的任何非函数参数都会被静默忽略，如果想忽略onResolved参数，可以传递null or undefined，这样可以避免在内存中创建多余的对象
// p2.then(null, () => onRejected('p2'));

// 3. then会基于onResolved处理程序返回一个新的promise实例，如果没有提供onResolved处理程序，则会包装上一次resolved后的值（即Promise.resolve(上一次resloved的值))）
// let p1 = Promise.resolve('foo');
// let p2 = p1.then();
// setTimeout(console.log, 0, p2); // Promise <resolved>: foo
// // p1.then()与下面几种写法是一样的
// let p3 = p1.then(() => {});
// let p5 = p1.then(() => undefined); // 任何then的返回值都会被Promise.resolve包装并返回，这里相当于是p1.then(() => Promise.resolved(undefined))
// let p4 = p1.then(() => Promise.resolve());

//4. then中抛出异常会被Prmose.rejected()包装，返回错误值Error('foo')会被Promise.resolved包装，onRejected 处理程序返回的值也会被 Promise.resolve() 包装
// let p1 = Promise.reject('foo');
// let p2 = p1.then(); // Promise <rejected>: foo
// // 这些都一样
// let p3 = p1.then(null, () => undefined); // Promise<resolved>: undefined
// let p4 = p1.then(null, () => {}); // Promise<resolved>: undefined
// let p5 = p1.then(null, () => Promise.resolve()); // Promise<resolved>: undefined
