// Reference: https://leetcode.com/problems/3sum/
// Possible solve: https://www.code-recipe.com/post/three-sum

// deduplication array
// Example: [-1,0,1] is the same as [0, 1, -1]

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
console.log(deduplication([[-1, 0, 1], [0, 1, -1], [1, 0, -1], [1, 2, 3]]));
// Output: [[1, 0, -1], [1, 2, 3]]


function threeSum(array) {
    let length = array.length;
    let result = [];
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                // array[i] + array[j] + array[k] = 0
                if (array[i] + array[j] + array[k] === 0) {
                    result.push([array[i], array[j], array[k]]);
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