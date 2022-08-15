// Reference: https://leetcode.com/problems/find-pivot-index/

function pivotIndex(nums) {
    let { length } = nums;
    let left = 0;
    // sum of all elements in nums
    let sum = nums.reduce((pre, cur) => pre + cur);
    // i = 0
    if (left + nums[0] === sum) return 0;
    // i from 1 to length - 1
    for (let i = 1; i < length; i++) {
        left += nums[i - 1];
        if (2 * left + nums[i] === sum) return i;
    }
    return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3

console.log(pivotIndex([1, 2, 3])); // -1

console.log(pivotIndex([2, 1, -1])); // 0