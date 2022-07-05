// Reference: https://leetcode.com/problems/container-with-most-water/submissions/

function maxArea(height) {
    // initial left and right
    let left = 0;
    let right = height.length - 1;
    let result = (right - left) * Math.min(height[left], height[right]);
    // store calculate area
    let calculate = 0;
    // exact left and right
    let exactLeft = 0;
    let exactRight = height.length - 1;
    while (left !== right) {
        if (height[left] < height[right]) {
            // increment left
            left++;
            // update exactRight and calculate area
            exactRight = right;
            calculate = (right - left) * Math.min(height[left], height[right]);
            // update result and exactLeft
            calculate > result ? (result = calculate, exactLeft = left) : "";
            // console.log(1, [left, right], [result, exactLeft, exactRight]);
        }
        else {
            // increment right
            right--;
            // update exactLeft and calculate area
            exactLeft = left;
            calculate = (right - left) * Math.min(height[left], height[right]);
            // update result and exactRight
            calculate > result ? (result = calculate, exactRight = right) : "";
            // console.log(2, [left, right], [result, exactLeft, exactRight]);
        }
    }
    return result;
    // return [result, exactLeft, exactRight];
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49    [49, 1, 8]
console.log(maxArea([1, 1])); // 1    [1, 0, 1]
console.log(maxArea([2, 3, 4, 5, 18, 17, 6])); // 17    [17, 4, 5]