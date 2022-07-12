function fn1(num) {
    return num + 1;
}
function fn2(num) {
    return num + 2;
}
function fn3(num) {
    return num + 3;
}

// 我们需要实现这样一个组合函数，接受参数为需要组合的子函数，最后返回组合后的函数。
// 最终目的使 compose(fn3,fn2,fn1)(5) === fn3(fn2(fn1(5)))

function compose(...args) {
    return function (value) {
        if (typeof value !== 'number') {
            throw new Error('第二类参数必须为number');
        }
        return args.reduce((pre, cur, index, arr) => {
            if (typeof arr[index] !== 'function') {
                throw new Error('第一类参数必须为函数');
            }
            return arr[index](pre);
        }, value);
    };
}

console.log('resulr', compose(fn3, fn2, fn1)(5));
