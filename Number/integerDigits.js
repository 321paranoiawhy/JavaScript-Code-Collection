// n 的 位数 lg(n) + 1 向下取整
// 如 10 的位数 lg(10) + 1 向下取整 2
// 如 50 的位数 lg(50) + 1 向下取整 2
// 如 100 的位数 lg(100) + 1 向下取整 3

function integerDigits(n) {
    return Math.floor(Math.log10(n) + 1);
}

console.log(integerDigits(10)); // 2

console.log(integerDigits(50)); // 3

console.log(integerDigits(100)); // 3