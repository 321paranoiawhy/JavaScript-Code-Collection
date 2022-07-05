// function recursionFactorial(number) {
//     if (number === 0) {
//         return BigInt(1);
//     }
//     // return number * recursionFactorial(number - 1);
//     // return number * arguments.callee(number - 1);
//     return BigInt(number) * BigInt(arguments.callee(number - 1));
// }
// console.log(recursionFactorial(0)); // 1n
// console.log(recursionFactorial(1)); // 1n
// console.log(recursionFactorial(10)); // 3628800n
// console.log(recursionFactorial(100)); // 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000n
// let newRecursionFactorial = recursionFactorial;
// console.log(newRecursionFactorial(0)); // 1n
// console.log(newRecursionFactorial(1)); // 1n
// console.log(newRecursionFactorial(10)); // 3628800n
// console.log(newRecursionFactorial(100)); // 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000n


function memoizationFactorial(number) {
    if (number === 0) {
        return BigInt(1);
    }
    if (!(number in memoizationFactorial)) {
        memoizationFactorial[number] = BigInt(number) * memoizationFactorial(number - 1);
    }
    return memoizationFactorial[number];
}
console.log(memoizationFactorial(0)); // 1n
console.log(memoizationFactorial(1)); // 1n
console.log(memoizationFactorial(10)); // 3628800n
console.log(memoizationFactorial[5]); // 120n
console.log(memoizationFactorial(100)); // 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000n
console.log(memoizationFactorial[50]); // 30414093201713378043612608166064768844377641568960512000000000000n


// function squareFactorial(number) {
//     if (number === 0) {
//         return BigInt(1);
//     }
//     if (number % 2 === 0) {
//         return BigInt(number) * squareFactorial(number - 1);
//     }
//     else {
//         let middle = (number + 1) / 2;
//         let result = BigInt(middle);
//         let temp = middle * middle;
//         // i < number <=> i <= number - 2
//         for (let i = 1; i < number; i += 2) {
//             temp -= i;
//             result *= BigInt(temp);
//         }
//         return result;
//     }
// }
// console.log(squareFactorial(0)); // 1n
// console.log(squareFactorial(1)); // 1n
// console.log(squareFactorial(10)); // 3628800n
// console.log(squareFactorial(100)); // 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000n


// function forFactorial(number) {
//     if (number === 0 || number === 1) return 1;
//     let result = 1;
//     for (let i = 2; i <= number; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(forFactorial(0)); // 1
// console.log(forFactorial(1)); // 1
// console.log(forFactorial(10)); // 3628800
// console.log(forFactorial(100)); // 9.33262154439441e+157
// console.log(BigInt(forFactorial(100))); // 93326215443944102188325606108575267240944254854960571509166910400407995064242937148632694030450512898042989296944474898258737204311236641477561877016501813248n
// console.log(forFactorial(1000)); // Infinity


// function forFactorial(number) {
//     if (number === 0) return BigInt(1);
//     let result = BigInt(1);
//     for (let i = 1; i <= number; i++) {
//         result *= BigInt(i);
//     }
//     // return result; // return the BigInt result directly
//     return result.toString(); // return a string representation of the BigInt result
//     // return result.toString().length;
//     // return Number(result.toString());
// }
// console.log(forFactorial(0)); // 1
// console.log(forFactorial(1)); // 1
// console.log(forFactorial(10)); // 3628800
// console.log(forFactorial(100)); // 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000
// console.log(forFactorial(1000)); // 40238...