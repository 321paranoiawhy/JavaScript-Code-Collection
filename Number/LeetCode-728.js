// Reference: https://leetcode.com/problems/self-dividing-numbers/

// Basic
function selfDividingNumbers(left, right) {
    let result = [];
    for (let i = left; i <= right; i++) {
        let string = String(i);
        if (string.includes("0")) continue;
        if ([...string].every(item => i % item === 0)) {
            result.push(i);
        }
    }
    return result;
}

console.log(selfDividingNumbers(1, 22)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

console.log(selfDividingNumbers(47, 85)); // [48, 55, 66, 77]