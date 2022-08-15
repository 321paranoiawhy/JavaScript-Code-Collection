/**
 * @param {array[]} array -- array to be sorted
 * @param {boolean} order -- true(default) or false, true means ascending order, false means descending order
 * @param {boolean} log -- false(default) or true, true means log, false means no log
 * @returns {array[]}
 */

function insertionSort(array, order = true, log = false) {
    let length = array.length;
    let current, prefix;

    let console = globalThis.console;
    // no log
    if (!log) {
        console = { log: () => { } };
    }

    // ascending order
    if (order) {
        for (let i = 1; i < length; i++) {
            current = array[i];
            prefix = i - 1;
            while (prefix >= 0 && array[prefix] > current) {
                array[prefix + 1] = array[prefix];
                console.log(`i = ${i}:`, array);
                prefix--;
            }
            array[prefix + 1] = current;
            console.log(`i = ${i} end:`, array);
        }
    }
    // descending order
    else {
        for (let i = 1; i < length; i++) {
            current = array[i];
            prefix = i - 1;
            while (prefix >= 0 && array[prefix] < current) {
                array[prefix + 1] = array[prefix];
                console.log(`i = ${i}:`, array);
                prefix--;
            }
            array[prefix + 1] = current;
            console.log(`i = ${i} end:`, array);
        }
    }
    console.log("At last:", array);
    return array;
}

// ascending order
console.log(insertionSort([5, 3, 8, 4, 6])); // [3, 4, 5, 6, 8]
console.log(insertionSort([5, 3, 8, 4, 6], true)); // [3, 4, 5, 6, 8]
console.log(insertionSort([5, 3, 8, 4, 6], true, true)); // ...

// descending order
console.log(insertionSort([5, 3, 8, 4, 6], false)); // [8, 6, 5, 4, 3]

// ascending order
console.log(insertionSort([5, 3, 8, 3, 4, 6])); // [3, 3, 4, 5, 6, 8]
console.log(insertionSort([5, 3, 8, 3, 4, 6], true)); // [3, 3, 4, 5, 6, 8]

// descending order
console.log(insertionSort([5, 3, 8, 3, 4, 6], false)); // [8, 6, 5, 4, 3, 3]

// Initial array: [5, 3, 8, 4, 6]

// i = 1 (begin)
// [5, 5, 8, 4, 6]
// [3, 5, 8, 4, 6] (end)

// i = 2 (begin)
// [3, 5, 8, 4, 6] (end)

// i = 3 (begin)
// [3, 5, 8, 8, 6]
// [3, 5, 5, 8, 6]
// [3, 4, 5, 8, 6] (end)

// i = 4 (begin)
// 3, 4, 5, 8, 8]
// [3, 4, 5, 6, 8] (end)

// At last: [3, 4, 5, 6, 8]