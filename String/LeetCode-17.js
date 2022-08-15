// Reference: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Possible solution: https://leetcode.cn/problems/letter-combinations-of-a-phone-number/solution/hui-su-dui-lie-tu-jie-by-ml-zimingmeng/

function letterCombinations(digits) {
    let { length } = digits;
    // length === 0
    if (length === 0) return [];
    // "2" ~ "9"
    const obj = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    };
    let result = [];
    function backtrack(combination, next) {
        if (next.length === 0) result.push(combination);
        else {
            let current = obj[next[0]];
            for (let i = 0; i < current.length; i++) {
                backtrack(combination + current[i], next.substring(1));
            }
        }
    }
    backtrack("", digits);
    return result;
}

console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

console.log(letterCombinations(""));// []

console.log(letterCombinations("2")); // ["a", "b", "c"]