// Reference: https://leetcode.com/problems/integer-to-roman/

function intToRoman(num) {
    let object = {
        "1": "I",
        "4": "IV",
        "5": "V",
        "9": "IX",
        "10": "X",
        "40": "XL",
        "50": "L",
        "90": "XC",
        "100": "C",
        "400": "CD",
        "500": "D",
        "900": "CM",
        "1000": "M",
    };
    if (num in object) {
        return object[num];
    }
    let result = "";
    while (!(num in object)) {
        if (num === 0) {
            break;
        }
        if (1 < num && num < 4) {
            result += "I".repeat(num);
            break;
        }
        if (5 < num && num < 9) {
            result += "V" + "I".repeat(num - 5);
            break;
        }
        if (10 < num && num < 40) {
            result += "X".repeat(Math.floor(num / 10));
            num = num % 10;
        }
        if (40 < num && num < 50) {
            result += "XL";
            num = num % 40;
        }
        if (50 < num && num < 90) {
            result += "L";
            num = num % 50;
        }
        if (90 < num && num < 100) {
            result += "XC";
            num = num % 90;
        }
        if (100 < num && num < 400) {
            result += "C".repeat(Math.floor(num / 100));
            num = num % 100;
        }
        if (400 < num && num < 500) {
            result += "CD";
            num = num % 400;
        }
        if (500 < num && num < 900) {
            result += "D";
            num = num % 500;
        }
        if (900 < num && num < 1000) {
            result += "CM";
            num = num % 900;
        }
        if (num > 1000) {
            result += "M".repeat(Math.floor(num / 1000));
            num = num % 1000;
        }
    }
    return num in object ? result + object[num] : result;
}
console.log(intToRoman(3)); // III
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // MCMXCIV
console.log(intToRoman(2022)); // MMXXII
console.log(intToRoman(4)); // IV
console.log(intToRoman(11)); // XI
console.log(intToRoman(20)); // XX