// Reference: https://leetcode.com/problems/two-sum/
// Notice: each input would have exactly one solution
// LeetCode-1

function twoSum(nums, target) {
    // shadow copy of array
    let copy = nums.slice();
    for (let i = 0; i < nums.length; i++) {
        // if number - array [i] can be found in copy, and the exact index is not equal to i
        if (copy.indexOf(target - nums[i]) !== -1 && copy.indexOf(target - nums[i]) !== i) {
            // sort by index
            return [i, copy.indexOf(target - nums[i])].sort();
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]

console.log(twoSum([3, 2, 4], 6)); // [1,2]

console.log(twoSum([3, 3], 6)); // [0,1]