function isNum(num) {
    if (typeof num === 'number') {
        return 1
    } else {
        return '1'
    }
}
// 加法函数
function add(x) {
    return function(y) {
        return x + y;
    }
}
// 乘法函数
function multi(x) {
    return function(y) {
        return x * y + 1;
    }
}

export {
    isNum,
    add,
    multi
}