// Reference: https://leetcode.com/problems/perfect-number/

// Basic
function checkPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num ? true : false;
}

// 1 + 2 + 4 + 7 + 14 === 28
console.log(checkPerfectNumber(28)); // true

// 1 !== 7
console.log(checkPerfectNumber(7)); // false


// Optimization
// Possible solve: https://leetcode.com/problems/perfect-number/discuss/1895272/Simple-JavaScript-Solution-oror-Faster-than-96
function checkPerfectNumberOpt(num) {
    let sum = 0;
    let divisor = 1;
    while (divisor < num / divisor) {
        if (num % divisor === 0) {
            // we add all divisors together includes num itself
            sum += divisor + num / divisor;
        }
        divisor++;
    }
    // according to the problem description: excluding the number itself
    // so we need sum minus num, or just check sum === 2 * num instead
    sum -= num;
    return sum === num ? true : false;
}

// 1 + 2 + 4 + 7 + 14 === 28
console.log(checkPerfectNumberOpt(28)); // true

// 1 !== 7
console.log(checkPerfectNumberOpt(7)); // false