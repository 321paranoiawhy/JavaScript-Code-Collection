// Reference: https://leetcode.com/problems/reduce-array-size-to-the-half/

function minSetSize(arr) {
    let set = new Set();
    let frequencyObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            frequencyObj[arr[i]] += 1;
        }
        else {
            set.add(arr[i]);
            frequencyObj[arr[i]] = 1;
        }
    }
    let sortedArray = Object.values(frequencyObj).sort((a, b) => b - a);
    let sum = 0;
    let count = 0;
    let length = arr.length;
    for (let i = 0; i < sortedArray.length; i++) {
        sum += sortedArray[i];
        count++;
        if (sum >= length / 2) {
            return count;
        }
    }
}

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])); // 2

console.log(minSetSize([7, 7, 7, 7, 7, 7])); // 1