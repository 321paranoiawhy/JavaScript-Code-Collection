// Reference: https://leetcode.com/problems/3sum/
// Possible solve: https://www.code-recipe.com/post/three-sum
// Possible solve: https://github.com/Cloudyttt/Algorithm-Design/blob/master/%E6%89%8B%E6%92%95JavaScript%E6%BA%90%E7%A0%81/%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.js
// LeetCode-15

// Basic
function threeSum(nums) {
    // deduplication array
    // Example: [-1, 0, 1] is the same as [0, 1, -1]
    function deduplication(array) {
        // deep copy of array
        let result = JSON.parse(JSON.stringify(array));
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i].sort().toString() === array[j].sort().toString()) {
                    delete result[i];
                }
            }
        }
        return result.filter(Boolean);
    }
    // [-1, 0, 1].sort().toString() === [0, 1, -1].sort().toString()
    console.log(deduplication([[-1, 0, 1], [0, 1, -1], [1, 0, -1], [1, 2, 3]]));
    // Output: [[1, 0, -1], [1, 2, 3]]


    let length = nums.length;
    let result = [];
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                // nums[i] + nums[j] + nums[k] = 0
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    // deduplication result
    return deduplication(result);
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, 2, -1], [0, 1, -1]]

console.log(threeSum([])); // []

console.log(threeSum([0])); // []

// Time Limit Exceeded
console.log(threeSum([-13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14, 13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5, -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8, -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5, -2, -6, -3, -10, 4, 2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11, -10, -4, -15, -9, -1, -1, 3, 4, 1, 8, 1]));


// Optimization
function threeSumOpt(nums) {
    // return in advance when the length of nums is smaller than 3
    if (nums.length < 3) return [];

    // sort in ascending order
    nums = nums.sort((a, b) => a - b);

    // deduplication nums (in ascending order)
    let unique = [...new Set(nums)];

    // filter elements which are negative (in ascending order)
    negative = unique.filter(item => item <= 0);

    let result = [];
    let set = [];
    for (let i = 0; i < negative.length; i++) {
        // each element in set is an new Set
        set[i] = new Set();
        let temp = negative[i];
        let array = nums.slice(nums.indexOf(temp) + 1);
        let [left, right] = [0, array.length - 1];
        // move left or right until left >= right
        while (left < right) {
            if (array[left] + array[right] + temp > 0) {
                right--;
            }
            else if (array[left] + array[right] + temp < 0) {
                left++;
            }
            // array[left] + array[right] + temp === 0
            else {
                // avoid duplication element in result
                if (!set[i].has(array[left]) && !set[i].has(array[right])) {
                    // push an array which element is in ascending order
                    result.push([temp, array[left], array[right]]);
                    set[i].add(array[left]).add(array[right]);
                    left++;
                    right--;
                }
                else {
                    left++;
                    right--;
                }
            }
        }
    }
    return result;
}

// the length of nums is smaller than 3
console.log(threeSumOpt([])); // []
console.log(threeSumOpt([0])); // []
console.log(threeSumOpt([0, 1])); // []
console.log(threeSumOpt([0, 0, 0])); // [[0, 0, 0]]

console.log(threeSumOpt([0, 1, -1])); // [[-1, 0, 1]]

console.log(threeSumOpt([1, 2, -2, -1])); // []

console.log(threeSumOpt([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]

// unique: [-15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1];
console.log(threeSumOpt([-13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14, 13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5, -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8, -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5, -2, -6, -3, -10, 4, 2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11, -10, -4, -15, -9, -1, -1, 3, 4, 1, 8, 1]));