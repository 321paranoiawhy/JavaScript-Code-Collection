// Reference: https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
// LeetCode-1423

// maxScore
function maxScore(cardPoints, k) {
    // when k is equal to the length of cardPoints
    // just return the sum of each element of cardPoints, rather than compare and calculate result
    if (k === cardPoints.length) {
        return cardPoints.reduce((pre, cur) => pre + cur);
    }

    let length = cardPoints.length;
    let sum = cardPoints.slice(0, k).reduce((pre, cur) => pre + cur);
    let result = sum;
    for (i = 0; i < k; i++) {
        sum += cardPoints[length - i - 1] - cardPoints[k - i - 1];
        result = Math.max(result, sum);
    }
    return result;
}

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3)); // 12 (1 + 6 + 5)

console.log(maxScore([2, 2, 2], 2)); // 4 (2 + 2)

console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7)); // 55 (sum of cardPoints)

console.log(maxScore([11, 49, 100, 20, 86, 29, 72], 4)); // 232 (11 + 49 + 100 + 72)


// minScore
function minScore(cardPoints, k) {
    // when k is equal to the length of cardPoints
    // just return the sum of each element of cardPoints, rather than compare and calculate result
    if (k === cardPoints.length) {
        return cardPoints.reduce((pre, cur) => pre + cur);
    }

    let length = cardPoints.length;
    let sum = cardPoints.slice(0, k).reduce((pre, cur) => pre + cur);
    let result = sum;
    for (i = 0; i < k; i++) {
        sum += cardPoints[length - i - 1] - cardPoints[k - i - 1];
        result = Math.min(result, sum);
    }
    return result;
}

console.log(minScore([1, 2, 3, 4, 5, 6, 1], 3)); // 4 (1 + 1 + 2)

console.log(minScore([2, 2, 2], 2)); // 4 (2 + 2)

console.log(minScore([9, 7, 7, 9, 7, 7, 9], 7)); // 55 (sum of cardPoints)

console.log(minScore([11, 49, 100, 20, 86, 29, 72], 4)); // 161 (11 + 49 + 72 + 29)