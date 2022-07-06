function mergeArray(array) {
    // initialize
    let left = 0;
    let right = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] - array[i] === 1) {
            // update right
            right = i + 1;
        }
        else {
            // if left = right, push    array[left] or array[right]
            if (left === right) {
                result.push(`${array[left]}`);
            }
            // if left != right, push    array[left]-array[right]
            else {
                result.push(`${array[left]}-${array[right]}`);
            }
            // update left and right
            left = i + 1;
            right = i + 1;
        }
    }
    return result;
}

console.log(mergeArray([1, 2, 3, 6, 8, 9, 15])); // ['1-3','6','8-9','15']

console.log(mergeArray([1, 2, 3, 10, 11, 12])); // ['1-3','10-12']