// Reference: https://leetcode.com/problems/removing-minimum-and-maximum-from-array/
// LeetCode-2091

function minimumDeletions(nums) {
    let minIndex = nums.indexOf(Math.min(...nums));
    let maxIndex = nums.indexOf(Math.max(...nums));
    let max = Math.max(minIndex, maxIndex);
    let min = Math.min(minIndex, maxIndex);
    // max + 1: from 0 to max
    // nums.length - min: from last to min
    // min + 1 + nums.length - max: from 0 to min, and from last to max
    return Math.min(max + 1, nums.length - min, min + 1 + nums.length - max);
}

console.log(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6])); // 5

console.log(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5])); // 3

console.log(minimumDeletions([101])); // 1