// Reference: https://leetcode.com/problems/ugly-number-ii/
// LeetCode-264

// Basic
function nthUglyNumber(n) {
    function isUgly(n) {
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
    let result = [1];
    let number = 1;
    while (result.length !== n) {
        number++;
        if (isUgly(number)) {
            result.push(number);
        }
    }
    return result[n - 1];
}

// [1, 2, 3, 4, 5, 6, 8, 9, 10, 12][10 - 1]
console.log(nthUglyNumber(10)); // 12

// [1][1 - 1]
console.log(nthUglyNumber(1)); // 1

// Time Limit Exceeded
console.log(nthUglyNumber(1407)); // 536870912


// Optimization
function nthUglyNumberOpt(n) {
    let result = [1];
    let [p2, p3, p5] = [0, 0, 0];
    for (let i = 1; i < n; i++) {
        let n2 = result[p2] * 2;
        let n3 = result[p3] * 3;
        let n5 = result[p5] * 5;
        // console.log([n2, n3, n5]);

        let min = Math.min(n2, n3, n5);
        result.push(min);
        // console.log(min);

        if (min === n2) {
            p2++;
        }
        if (min === n3) {
            p3++;
        }
        if (min === n5) {
            p5++;
        }
        // console.log([p2, p3, p5]);

        // Do not write like below because n2 may be equal to n3, n3 may be equal to n5...
        // thus when n2 is equal to n3, p2 and p3 will increment by one.
        // min === n2 ? p2++ : (min === n3 ? p3++ : p5++);
    }
    // console.log(result);
    return result[n - 1];
}

console.log(nthUglyNumberOpt(10)); // 12

console.log(nthUglyNumberOpt(1)); // 1

console.log(nthUglyNumberOpt(1407)); // 536870912