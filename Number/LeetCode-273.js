// Reference: https://leetcode.com/problems/integer-to-english-words/
// LeetCode-273

function numberToWords(num) {
    // 0 ~ 20 (step 1)
    // 30 ~ 90 (step 10)
    // 百 hundred
    // 千 thousand
    // 百万 million
    // 十亿 billion
    let object = {
        "0": "Zero",
        "1": "One",
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine",
        "10": "Ten",
        "11": "Eleven",
        "12": "Twelve",
        "13": "Thirteen",
        "14": "Fourteen",
        "15": "Fifteen",
        "16": "Sixteen",
        "17": "Seventeen",
        "18": "Eighteen",
        "19": "Nineteen",
        "20": "Twenty",
        "30": "Thirty",
        "40": "Forty",
        "50": "Fifty",
        "60": "Sixty",
        "70": "Seventy",
        "80": "Eighty",
        "90": "Ninety",
        "100": "Hundred",
        "1000": "Thousand",
        "1000000": "Million",
        "1000000000": "Billion",
    };
    // One Hundred / One Thousand / One Million / One Billion
    if (["100", "1000", "1000000", "1000000000"].includes(String(num))) {
        return "One" + " " + object[num];
    }
    // object property other than above property
    if (num in object) {
        return object[num];
    }
    // object property array
    let propertyArray = Object.keys(object).slice();
    // get the scope of num (the first object property which is larger than num)
    function scope(num) {
        return propertyArray.filter((item, index, array) => (item - num) * (array[index + 1] - num) <= 0);
    }
    // get three digits num's English words representation
    function threeDigits(num) {
        let threeDigitsResult = "";
        num = Number(num);
        if (num === 100) {
            return "One Hundred";
        }
        while (!(num in object)) {
            // cause scope(num) returns an array with just one element
            let divisor = scope(num)[0];
            // if num > 100 (equitant to: divisor === "100")
            if (divisor === "100") {
                threeDigitsResult = threeDigitsResult + object[Math.floor(num / divisor)] + " " + object["100"] + " ";
            }
            else {
                threeDigitsResult = threeDigitsResult + object[divisor] + " ";
            }
            // update num
            num = num % divisor;
        }
        return num === 0 ? threeDigitsResult.trim() : threeDigitsResult + object[num];
    }
    // spilt num into pieces from num's end, each piece have three digits or less than
    function spilt(num) {
        let spiltResult = [];
        let num2string = String(num);
        let length = num2string.length;
        let remainder = length % 3;
        // if length % 3 === 0
        if (remainder === 0) {
            for (let i = length; i > 0; i -= 3) {
                spiltResult.push(num2string.slice(i - 3, i));
            }
        }
        else {
            for (let i = length; i > remainder; i -= 3) {
                spiltResult.push(num2string.slice(i - 3, i));
            }
            // push the first piece of num2string
            spiltResult.push(num2string.slice(0, remainder));
        }
        // reverse spiltResult
        return spiltResult.reverse();
    }
    let spiltNumber = spilt(num);
    // num just have three digits
    if (spiltNumber.length === 1) {
        return threeDigits(num);
    }
    else {
        let result = "";
        let map = ["", "Thousand", "Million", "Billion"];
        for (let i = 0; i < spiltNumber.length; i++) {
            if (spiltNumber[i] === "000") continue;
            result = result + threeDigits(spiltNumber[i]) + " " + map[spiltNumber.length - i - 1] + " ";
        }
        return result.trim();
    }
}


console.log(numberToWords(0)); // "Zero"
console.log(numberToWords(50)); // "Fifty"
console.log(numberToWords(100)); // "One Hundred"
console.log(numberToWords(200)); // "Two Hundred"
// 1,000
console.log(numberToWords(1000)); // "One Thousand"
// 1,001
console.log(numberToWords(1001)); // "One Thousand One"
// 1,000,010
console.log(numberToWords(1000010)); // "One Million Ten"
// 123
console.log(numberToWords(123)); // "One Hundred Twenty Three"
// 12,345
console.log(numberToWords(12345)); // "Twelve Thousand Three Hundred Forty Five"
// 1,234,567
console.log(numberToWords(1234567)); // "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// 1,111,111,111
console.log(numberToWords(1111111111)); // "One Billion One Hundred Eleven Million One Hundred Eleven Thousand One Hundred Eleven"