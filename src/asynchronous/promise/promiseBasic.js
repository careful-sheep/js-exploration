// 1. new Promise 接收一个exector函数作为参数，用来1） 初始化promise，2）控制状态转换
// let p1 = new Promise((resolve, reject) => resolve());
// setTimeout(console.log, 0, p1);

// 2. exector函数是同步执行的，因为exector是promise的初始化程序
// new Promise(() => setTimeout(console.log, 0, 'executor'));
// setTimeout(console.log, 0, 'promise initialized');

// 3. 添加 setTimeout 可以推迟切换状态
// const p = new Promise(resolve => setTimeout(resolve, 1000));
// setTimeout(console.log, 0, p);

// 4. 为避免卡在pending状态，可以设置一个定时推出的功能
// let p = new Promise((resolve, reject) => {
//     setTimeout(reject, 10000); //10秒后调用reject()
// });
// setTimeout(console.log, 0, p); // Promise <pending>
// setTimeout(console.log, 11000, p); // Promise <rejected>

// 5. Promise.resolve()可以实例化一个resolved状态的Promise, 下面两种写法是等同的, Promise.reject同理
// let p1 = new Promise((resolve, reject) => resolve());
// let p2 = Promise.resolve();

// 6. 同步/异步执行的二元性
