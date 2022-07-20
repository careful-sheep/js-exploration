// Set
function uniqueArr(arr) {
    return [...new Set(arr)];
}

// reduce
function uniqueArr1(arr) {
    return arr.reduce(function (pre, cur) {
        return !pre.includes(cur) ? [...pre, cur] : pre;
    }, []);
}

console.log(uniqueArr1([1, 2, 2, 4, 3]));
