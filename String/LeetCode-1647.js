// Reference: https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
// LeetCode-1647

function minDeletions(s) {
    let unique = [];
    let frequency = [];
    // calculate the frequency of each different character in s
    for (let i = 0; i < s.length; i++) {
        let index = unique.indexOf(s[i]);
        if (index === -1) {
            unique.push(s[i]);
            frequency[unique.length - 1] = 1;
        }
        else {
            frequency[index] += 1;
        }
    }
    // sort in descending order
    frequency = frequency.sort((a, b) => b - a);
    // console.log(frequency);
    let length = frequency.length;
    let count = 0;
    for (let i = 0; i < length - 1; i++) {
        if (frequency[i] === frequency[i + 1]) {
            frequency[i + 1] -= 1;
            count++;
        }
        if (frequency[i] < frequency[i + 1]) {
            if (frequency[i] !== 0) {
                count += frequency[i + 1] - frequency[i] + 1;
                frequency[i + 1] = frequency[i] - 1;
            }
            else {
                count += frequency[i + 1];
                frequency[i + 1] = 0;
            }
        }
    }
    // console.log(frequency);
    return count;
}

// [2, 1] -> [2, 1]
console.log(minDeletions("aab")); // 0

// [3, 3, 2] -> [3, 2, 1]
console.log(minDeletions("aaabbbcc")); // 2

// [3, 2, 2, 1] -> [3, 2, 1, 0]
console.log(minDeletions("ceabaacb")); // 2

// [3, 3] -> [3, 2]
console.log(minDeletions("aaabbb")); // 1

// [2, 2, 2] -> [2, 1, 0]
console.log(minDeletions("abcabc")); // 3

// [4, 1, 1, 1] -> [4, 1, 0, 0]
console.log(minDeletions("bbcebab")); // 2