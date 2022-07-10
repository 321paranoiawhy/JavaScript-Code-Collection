// Reference: https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/
// Modulo 10^9+7 (1000000007): https://www.geeksforgeeks.org/modulo-1097-1000000007/

// Prefix sum
// https://leetcode.cn/problems/number-of-sub-arrays-with-odd-sum/solution/he-wei-qi-shu-de-zi-shu-zu-shu-mu-by-leetcode-solu/
function numOfSubarrays(arr) {
    let length = arr.length;
    let [odd, even] = [0, 1];
    let prefixSum = 0;
    let count = 0;
    for (let i = 0; i < length; i++) {
        prefixSum += arr[i];
        if (prefixSum % 2) {
            count += even;
            odd++;
        }
        else {
            count += odd;
            even++;
        }
    }
    return count % (10 ** 9 + 7);
}

console.log(numOfSubarrays([1, 3, 5])); // 4

console.log(numOfSubarrays([2, 4, 6])); // 0

console.log(numOfSubarrays([1, 2, 3, 4, 5, 6, 7])); // 16

// Dynamic Programming (DP)
// https://zhuanlan.zhihu.com/p/137992855