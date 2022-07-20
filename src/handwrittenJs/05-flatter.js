// flatten
function flatten(arr) {
    return arr.flat(Infinity);
}
console.log(flatten([1, 2, [1, [2, 3, [4, 5, [6]]]]]));

// flat deepOne
function flatReduce(arr) {
    return arr.reduce(function (pre, cur) {
        return pre.concat(Array.isArray(cur) ? flatReduce(cur) : cur);
    }, []);
}
console.log(flatReduce([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
