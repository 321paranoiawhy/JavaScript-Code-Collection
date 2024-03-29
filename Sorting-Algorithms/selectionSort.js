/**
 * @param {array[]} array -- array to be sorted
 * @param {boolean} order -- true(default) or false, true means ascending order, false means descending order
 * @returns {array[]}
 */

function selectionSort(array, order = true) {
    let { length } = array;
    let minIndex;

    // ascending order
    if (order) {
        for (let i = 0; i < length - 1; i++) {
            // initialize minIndex to i
            minIndex = i;
            for (let j = i + 1; j < length; j++) {
                if (array[j] < array[minIndex]) {
                    // update minIndex
                    minIndex = j;
                }
            }
            // exchange array[i] with array[minIndex]
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
    // descending order
    else {
        for (let i = 0; i < length - 1; i++) {
            // initialize minIndex to i
            minIndex = i;
            for (let j = i + 1; j < length; j++) {
                if (array[j] > array[minIndex]) {
                    // update minIndex
                    minIndex = j;
                }
            }
            // exchange array[i] with array[minIndex]
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
    return array;
}

// ascending order
console.log(selectionSort([5, 3, 8, 4, 6])); // [3, 4, 5, 6, 8]
console.log(selectionSort([5, 3, 8, 4, 6], true)); // [3, 4, 5, 6, 8]

// descending order
console.log(selectionSort([5, 3, 8, 4, 6], false)); // [8, 6, 5, 4, 3]

// ascending order
console.log(selectionSort([5, 3, 8, 3, 4, 6])); // [3, 3, 4, 5, 6, 8]
console.log(selectionSort([5, 3, 8, 3, 4, 6], true)); // [3, 3, 4, 5, 6, 8]

// descending order
console.log(selectionSort([5, 3, 8, 3, 4, 6], false)); // [8, 6, 5, 4, 3, 3]

// Initial array: [5, 3, 8, 4, 6]

// i = 0
// [3, 5, 4, 8, 6]

// i = 1
// [3, 4, 5, 6, 8]

// i = 2
// [3, 4, 5, 6, 8]

// i = 3
// [3, 4, 5, 6, 8]

// At last: [3, 4, 5, 6, 8]