// Reference: https://leetcode.com/problems/median-of-two-sorted-arrays/
// Notice: time complexity  O(log(m+n))
// LeetCode-4

function findMedianSortedArrays(nums1, nums2) {
    // notice: do not use sort() directly
    // [3,-2,-1].sort --> [-1, -2, 3], rather than [-2, -1, 3]
    let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    let length = mergedArray.length;
    if (length % 2 === 0) {
        return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    }
    else {
        // mergedArray[(length + 1) / 2 - 1]
        return mergedArray[(length - 1) / 2];
    }
}

console.log(findMedianSortedArrays([1, 3], [2])); // 2

console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5

console.log(findMedianSortedArrays([3], [-2, -1])); // -1