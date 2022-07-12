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
