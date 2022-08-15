// Reference: https://leetcode.com/problems/maximum-subarray/

function maxSubArray(nums) {
    let length = nums.length;

    // the length of array is not larger than zero
    if (length === 0) return 0;
    if (length === 1) return nums[0];

    // initialize sum and max to nums[0]
    let sum = nums[0];
    let max = nums[0];

    // i from 1 to length - 1
    for (let i = 1; i < length; i++) {
        // if sum is negative, then reset sum to current element -- nums[i]
        if (sum < 0) {
            sum = nums[i];
        }
        // is sum is positive, then add nums[i] to sum
        else {
            sum += nums[i];
        }
        // if sum is larger than max, then reset max to sum
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

console.log(maxSubArray([1])); // 1

console.log(maxSubArray([5, 4, -1, 7, 8])); // 23