// Reference: https://leetcode.com/problems/second-largest-digit-in-a-string/

function secondHighest(s) {
    let { length } = s;
    let [first, second] = [-1, -1];
    for (let i = 0; i < length; i++) {
        let number = Number(s[i]);
        // if s[i] is not a number(NaN), continue
        if (Number.isNaN(number)) continue;
        // if number is larger than first, then let second be first and first be number, continue
        if (number > first) {
            second = first;
            first = number;
            continue;
        }
        // in this case, just let second be number
        if (number < first && number > second) {
            second = number;
        }
    }
    return second;
}

console.log(secondHighest("dfa12321afd")); // 2

console.log(secondHighest("abc1111")); // -1