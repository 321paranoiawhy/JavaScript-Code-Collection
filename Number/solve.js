// first number n which result >= number2
function solve(number1, number2) {
    // denominator
    let n = 1;
    let sum = 0;
    while (sum < number2) {
        sum += number1 / n;
        n++;
    }
    return [number1, n, sum, number2];
}
console.log(solve(10, 50));
console.log(solve(100, 800));
console.log(solve(1000, 10000));

// sum
function sum(number1, number2) {
    let result = 0;
    for (let i = 1; i <= number2; i++) {
        result += number1 / i;
    }
    return [number1, number2, result];
}
console.log(sum(10, 83));
console.log(sum(10, 84));
console.log(sum(100, 1674));
console.log(sum(100, 1675));
console.log(sum(1000, 12367));
console.log(sum(1000, 12368));