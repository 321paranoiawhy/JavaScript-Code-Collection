// double pointer
// reference: https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html#%E5%8F%8C%E6%8C%87%E9%92%88

function threeSum(nums) {
    const { length } = nums;

    if (length < 3) return [];

    // ascending order
    nums.sort((a, b) => a - b);
    // double pointer
    let left, right;
    const result = [];
    for (let i = 0; i < length; i++) {
        // three numbers are: nums[i], nums[left], nums[right]
        left = i + 1;
        right = length - 1;

        if (nums[i] > 0) return result;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) left++;
            else if (sum > 0) right--;
            // sum === 0
            else {
                result.push([nums[i], nums[left], nums[right]]);
                while (right > left && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (right > left && nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));