// Divide and Conquer
// Time Complexity: O(nlogn)
// Space Complexity: O(n)
// Reference: https://segmentfault.com/a/1190000008866524

/**
 * @param {array[]} left -- left array
 * @param {array[]} right -- right array
 * @param {boolean} order -- true(default) or false, true means ascending order, false means descending order
 * @returns {array[]}
 */

function merge(left, right, order) {
    let result = [];

    // ascending order
    if (order) {
        while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            }
            else {
                result.push(right.shift());
            }
        }
    }
    // descending order
    else {
        while (left.length > 0 && right.length > 0) {
            if (left[0] > right[0]) {
                result.push(left.shift());
            }
            else {
                result.push(right.shift());
            }
        }
    }
    return result.concat(left).concat(right);
}

/**
 * @param {array[]} array -- array to be sorted
 * @param {boolean} order -- true(default) or false, true means ascending order, false means descending order
 * @returns {array[]}
 */

function mergeSort(array, order = true) {
    const { length } = array;

    // when array has just one element, return it
    if (length === 1) return array;

    let mid = Math.floor(length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    // recursion
    return merge(mergeSort(left, order), mergeSort(right, order), order);
}

// ascending order
console.log(mergeSort([5, 3, 8, 4, 6])); // [3, 4, 5, 6, 8]
console.log(mergeSort([5, 3, 8, 4, 6], true)); // [3, 4, 5, 6, 8]

// descending order
console.log(mergeSort([5, 3, 8, 4, 6], false)); // [8, 6, 5, 4, 3]

// ascending order
console.log(mergeSort([5, 3, 8, 3, 4, 6])); // [3, 3, 4, 5, 6, 8]
console.log(mergeSort([5, 3, 8, 3, 4, 6], true)); // [3, 3, 4, 5, 6, 8]

// descending order
console.log(mergeSort([5, 3, 8, 3, 4, 6], false)); // [8, 6, 5, 4, 3, 3]


// Initial array: [5, 3, 8, 4, 6]

// 1. split into one-element array
// left [5, 3] right [8, 4, 6]
// left-left [5] left-right [3] right-left [8] right-right [4, 6]
// left-left [5] left-right [3] right-left [8] right-right-left [4] right-right-right [6]

//           left                          right
//          /    \                        /     \
// left-left      left-right    right-left       right-right
//                                              /           \
//                              right-right-left             right-right-right

// 2. merge left-left and left-right
// new-left = merge(left-left, left-right, order) -> [3, 5]

// 3. merge right-left, right-right-left and right-right-right
// new-right-right = merge(right-right-left, right-right-right, order) -> [4, 6]
// new-right = merge(right-left, new-right-right, order) -> [4, 8, 6]

// 4. merge left and right
// result = merge(new-left, new-right, order) -> [3, 4, 5, 6, 8]

// At last: [3, 4, 5, 6, 8]