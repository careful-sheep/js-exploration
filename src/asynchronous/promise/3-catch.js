// 1. Promise.prototype.catch()是Promise.prototype.then(null, onRejected)的语法糖， 返回一个新的Promise实例

let p = Promise.reject();
let onRejected = function (e) {
    setTimeout(console.log, 0, 'rejected');
};
// 这两种添加拒绝处理程序的方式是一样的:
p.then(null, onRejected); // rejected
p.catch(onRejected); // rejected
