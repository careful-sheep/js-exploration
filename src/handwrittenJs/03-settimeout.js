// settimeout实现setinterval, 模拟是为了解决两个问题
// 1. 在前一个定时器执行完前，不会向队列插入新的定时器
// 2. 保证定时器间隔
class myInterval {
    constructor(callback, time) {
        this.timer = null;
        this.callback = callback;
        this.time = time;
    }
    interval() {
        let self = this;
        this.callback();
        this.timer = setTimeout(function () {
            self.interval();
        }, self.time);
    }

    clearMyInterval() {
        clearTimeout(this.timer);
    }
}

const inter = new myInterval(function () {
    console.log('555');
}, 1000);
inter.interval();

// setInterval实现setTimeour
const MySetTimeout = (callback, time) => {
    const timer = setInterval(() => {
        clearInterval(timer);
        callback();
    }, time);
};
