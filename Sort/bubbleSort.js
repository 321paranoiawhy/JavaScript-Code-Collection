/**
 * @param {array[]} array -- array to be sorted
 * @param {boolean} order -- true(default) or false, true means ascending order, false means descending order
 * @returns {array[]}
 */

// Time Complexity: O(n**2)
// Space Complexity: O(n)

function bubbleSort(array, order = true) {
    let length = array.length;

    // ascending order
    if (order) {
        // outer loop (0 -> length - 2)
        for (let i = 0; i < length - 1; i++) {
            // inner loop (length - 1 -> i + 1)
            for (let j = length - 1; j > i; j--) {
                if (array[j] < array[j - 1]) {
                    // exchange the two elements
                    // in order to let smaller element bubble forward
                    [array[j], array[j - 1]] = [array[j - 1], array[j]];
                }
            }
        }
    }
    // descending order
    else {
        // outer loop (0 -> length - 2)
        for (let i = 0; i < length - 1; i++) {
            // inner loop (length - 1 -> i + 1)
            for (let j = length - 1; j > i; j--) {
                if (array[j] > array[j - 1]) {
                    // exchange the two elements
                    // in order to let smaller element bubble forward
                    [array[j], array[j - 1]] = [array[j - 1], array[j]];
                }
            }
        }
    }
    return array;
}

// ascending order
console.log(bubbleSort([5, 3, 8, 4, 6])); // [3, 4, 5, 6, 8]
console.log(bubbleSort([5, 3, 8, 4, 6], true)); // [3, 4, 5, 6, 8]

// descending order
console.log(bubbleSort([5, 3, 8, 4, 6], false)); // [8, 6, 5, 4, 3]

// ascending order
console.log(bubbleSort([5, 3, 8, 3, 4, 6])); // [3, 3, 4, 5, 6, 8]
console.log(bubbleSort([5, 3, 8, 3, 4, 6], true)); // [3, 3, 4, 5, 6, 8]

// descending order
console.log(bubbleSort([5, 3, 8, 3, 4, 6], false)); // [8, 6, 5, 4, 3, 3]

console.log(bubbleSort([5, 4, 3, 2, 1])); // [3, 4, 5, 6, 8]

// Initial array: [5, 3, 8, 4, 6]

// i = 0
// i = 0, j = 4 -> [5, 3, 4, 8, 6]
// i = 0, j = 1 -> [3, 5, 4, 8, 6]

// i = 1
// i = 1, j = 4 -> [3, 5, 4, 6, 8]
// i = 1, j = 2 -> [3, 4, 5, 6, 8]

// i = 2
// [3, 4, 5, 6, 8]

// i = 3
// [3, 4, 5, 6, 8]

// At last: [3, 4, 5, 6, 8]