# Reference

* [Introduction to Algorithms - Read Online](http://staff.ustc.edu.cn/~csli/graduate/algorithms/book6/toc.htm)
* [Introduction to Algorithms - PDF](https://www.askbooks.net/2022/02/pdf-introduction-to-algorithms-third.html)
* [算法导论中的伪代码](https://niyunsheng.gitbook.io/algorithm/pseudocode)
* [Sorting Algorithms - Geeks for Geeks](https://www.geeksforgeeks.org/sorting-algorithms/)
* [algorithm-visualizer](https://algorithm-visualizer.org/)
* [Sorting - visualgo](https://visualgo.net/en/sorting?slide=1)

# Similarities and Differences Between Sorting Algorithms

| Sorting Algorithms |   Type   | Average Time Complexity | Best Case Time Complexity | Worst Case Time Complexity | Space Complexity |   Stable   |
| :----------------: | :------: | :---------------------: | :-----------------------: | :------------------------: | :--------------: | :--------: |
|    Bubble Sort     | In Place |         O(n^2)          |           O(n)            |           O(n^2)           |       O(1)       |   Stable   |
|   Selection Sort   | In Place |         O(n^2)          |          O(n^2)           |           O(n^2)           |       O(1)       | Not Stable |
|   Insertion Sort   | In Place |         O(n^2)          |           O(n)            |           O(n^2)           |       O(1)       |   Stable   |
|     Merge Sort     | In Place |        O(nlogn)         |       O(nlognlogn)        |        O(nlognlogn)        |       O(1)       | Not Stable |

# Bubble Sort

## Pseudo Code

```JavaScript
// BUBBLE-SORT(A)
for i = 0 to A.length - 1
    for j = A.length - 1 downto i + 1
        if A[j] < A[j - 1]
            exchange A[j] with A[j - 1]
```

## JavaScript Implementation

```JavaScript
/**
 * @param {array[]} array -- array to be sorted
 * @param {boolean} order -- true(default) or false, true means ascending order, false means descending order
 * @returns {array[]}
 */

function bubbleSort(array, order = true) {
    let length = array.length;
    // ascending order
    if (order) {
        // outer loop (0 -> length - 2)
        for (let i = 0; i < length-1; i++) {
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
        for (let i = 0; i < length-1; i++) {
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
```

## Visualization

```
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
```

## Reference

* [Bubble Sort - algorithm-visualizer](https://algorithm-visualizer.org/brute-force/bubble-sort)

# Selection Sort

## Pseudo Code

```JavaScript
// SELECTION-Sort(A)
for i = 0 to A.length - 1
    minIndex = i
        for j = i + 1 tp A.length - 1
        if A[j] < A[minIndex]
            minIndex = j
    exchange A[i] with A[minIndex]
```

## JavaScript Implementation

```JavaScript
/**
 * @param {array[]} array -- array to be sorted
 * @param {boolean} order -- true(default) or false, true means ascending order, false means descending order
 * @returns {array[]}
 */

function selectionSort(array, order = true) {
    let length = array.length;
    let minIndex = 0;
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
```

## Visualization

```
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
```

## Reference

* [Selection Sort - algorithm-visualizer](https://algorithm-visualizer.org/brute-force/selection-sort)
* [选择排序 - Khan Academy](https://zh.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/selection-sort-pseudocode)
* [选择排序 - 伪代码算法及 C++ 和 Python 实现](https://blog.csdn.net/wxh928408225/article/details/70176999)

# Insertion Sort

## Pseudo Code

```JavaScript
// INSERTION-SORT(A)
for j = 1 to A.length - 1
    key = A[j]
    // Insert A[j] into the sorted sequence A[1..j - 1]
    i = j - 1
    while i >= 0 and A[i] > key
        A[i + 1] = A[i]
        i = i - 1
    A[i + 1] = key
```

## JavaScript Implementation

```JavaScript
/**
 * @param {array[]} array -- array to be sorted
 * @param {boolean} order -- true(default) or false, true means ascending order, false means descending order
 * @param {boolean} log -- false(default) or true, true means log, false means no log
 * @returns {array[]}
 */

function insertionSort(array, order = true, log = false) {
    let length = array.length;
    let current = 0;
    let prefix = 0;

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
```

## Visualization

```
Initial array: [5, 3, 8, 4, 6]

index = 1 (begin)
[5, 5, 8, 4, 6]
[3, 5, 8, 4, 6]
index = 1 (end)

index = 2 (begin)
[3, 5, 8, 4, 6]
index = 1 (end)

index = 3 (begin)
[3, 5, 8, 8, 6]
[3, 5, 5, 8, 6]
[3, 4, 5, 8, 6]
index = 1 (end)

index = 4 (begin)
3, 4, 5, 8, 8]
[3, 4, 5, 6, 8]
index = 1 (end)

At last: [3, 4, 5, 6, 8]
```

## Reference

* [Insertion Sort - algorithm-visualizer](https://algorithm-visualizer.org/brute-force/insertion-sort)

# Merge Sort

## Pseudo Code

```JavaScript
// MERGE-SORT(A, p, r)
// array: A[p, r]
// subarray: A[p, q], A[q + 1, r]
if p < r
    q = ⌊(p + q)/2⌋
    MERGE-SORT(A, p, q)
    MERGE-SORT(A, q + 1, r)
    MERGE(A, p, q, r)

// MERGE(A, p, q, r)
// subarray: A[p, q], A[q + 1, r]
```

## JavaScript Implementation

```JavaScript
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
```

## Visualization

```
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
```
