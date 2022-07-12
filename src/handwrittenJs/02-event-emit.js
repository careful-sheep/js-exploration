// 实现发布订阅模式 = 观察者模式, 优势如下
// 时间上解耦 （不需要确定加载（or异步加载）时间）
// 对象上接耦（订阅与发布逻辑是完全分离的）
class EventEmit {
    eventQueue = {};

    constructor() {}

    listen(type, callback) {
        if (!this.eventQueue[type]) {
            this.eventQueue[type] = [];
        }
        this.eventQueue[type].push(callback);
    }

    trigger(type, ...args) {
        this.eventQueue[type].forEach(fn => fn(args));
    }

    cancelEvent(type) {
        if (this.eventQueue[type]) {
            this.eventQueue[type] = [];
        }
    }
}

const eventEmit = new EventEmit();
eventEmit.listen('click', params => {
    console.log('1111' + params);
});
eventEmit.listen('mouse', params => {
    console.log('2222' + params);
});
// eventEmit.cancelEvent('mouse');
eventEmit.trigger('mouse', 'mouse');
