// Reference: https://leetcode.com/problems/divide-two-integers/
// LeetCode-29

// Basic
function divide(dividend, divisor) {
    let result = 0;
    // dividend and divisor have the same sign
    if (dividend * divisor >= 0) {
        dividend = Math.abs(dividend);
        divisor = Math.abs(divisor);
        while (dividend >= divisor) {
            dividend -= divisor;
            result++;
        }
        return result >= 2 ** 31 - 1 ? 2 ** 31 - 1 : result;
    }
    // the sign of dividend is not the same as the sign of divisor
    else {
        dividend = Math.abs(dividend);
        divisor = Math.abs(divisor);
        while (dividend >= divisor) {
            dividend -= divisor;
            result++;
        }
        return result >= 2 ** 31 ? -(2 ** 31) : -result;
    }
}

console.log(divide(10, 3)); // 3

console.log(divide(7, -3)); // -2

console.log(divide(-1, 1)); // -1

console.log(divide(-4, 3)); // -1

// 2147483648 > 2147483647
// Expected: 2147483647 (2 ** 31 - 1)
console.log(divide(-2147483648, -1)); // 2147483647

// -2147483649 < -(2 ** 31) = - 2147483648
// Expected: -2147483648 (-(2 ** 31))
console.log(divide(-2147483649, 1)); // -2147483648

// Time Limit Exceeded
console.log(divide(-2147483648, 2)); // -1073741824

console.log(divide(2147483647, 2)); // -1073741823


// Optimization
function divideOpt(dividend, divisor) {

}