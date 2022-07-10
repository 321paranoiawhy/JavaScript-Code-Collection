// Reference: https://leetcode.com/problems/monotone-increasing-digits/

function monotoneIncreasingDigits(n) {
    let stringArray = [...String(n)];
    let length = stringArray.length;
}

// begins with digit 1
console.log(monotoneIncreasingDigits(10)); // 9

// ascending order
console.log(monotoneIncreasingDigits(1234)); // 1234

// descending order
console.log(monotoneIncreasingDigits(332)); // 299

console.log(monotoneIncreasingDigits(342)); // 339

console.log(monotoneIncreasingDigits(354)); // 349

console.log(monotoneIncreasingDigits(351)); // 349

console.log(monotoneIncreasingDigits(351222)); // 349999