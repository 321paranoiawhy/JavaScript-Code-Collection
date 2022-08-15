// Possible Solution: https://www.cxymm.net/article/qq_32424059/89440686
// C++ / Java / Python https://xingxingpark.com/Leetcode-1063-Number-of-Valid-Subarrays/

function validSubarrays(nums) {
    const { length } = nums;
    let result = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            if (nums[j] < nums[i]) break;
            else result++;
        }
    }
    return result;
}

console.log(validSubarrays([3, 2, 1])); // 3

console.log(validSubarrays([2, 2, 2])); // 6

console.log(validSubarrays([1, 4, 2, 5, 3])); // 11