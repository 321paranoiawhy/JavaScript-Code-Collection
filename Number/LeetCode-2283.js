// Reference: https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/

function digitCount(num) {
    return [...num].every((item, index, array) => array.filter(element => element === `${index}`).length === Number(array[index]));
}

console.log(digitCount("1210")); // true

console.log(digitCount("030")); // false