// Reference: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

function searchRange(nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(searchRange([], 0)); // [-1, -1]