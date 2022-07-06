// Reference: https://leetcode.com/problems/ugly-number/
// LeetCode-263

// n = Math.pow(2, i) * Math.pow(3, j) * Math.pow(5, k)
// i, j, k >=0 但不全为 0

// Basic
function isUgly(n) {
    if (n === 0) return false;
    while (n !== 1) {
        if (n % 2 === 0) {
            n /= 2;
        }
        else if (n % 3 === 0) {
            n /= 3;
        }
        else if (n % 5 === 0) {
            n /= 5;
        }
        else return false;
    }
    return true;
}

//  6 = 2 x 3
console.log(isUgly(6)); // true

console.log(isUgly(1)); // true

console.log(isUgly(14));// false

console.log(isUgly(0));// false


// Optimization
function isUglyOpt(n) {
    if (n === 0) return false;
    while (n % 2 === 0) {
        n /= 2;
    }
    while (n % 3 === 0) {
        n /= 3;
    }
    while (n % 5 === 0) {
        n /= 5;
    }
    if (n === 1) {
        return true;
    }
    else return false;
}

console.log(isUglyOpt(6)); // true

console.log(isUglyOpt(1)); // true

console.log(isUglyOpt(14));// false

console.log(isUglyOpt(0));// false