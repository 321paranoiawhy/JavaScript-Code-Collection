// JavaScript: The Definitive Guide
// 8.8.2 Higher-Order Functions P215

// 1
function compose(f, g, h) {
    return function (...args) {
        // console.log(typeof args); // object
        // console.log(args); // [11]
        // console.log(args[0]); // 11

        // notice: h.apply(this, args)
        return f.call(this, g.call(this, h.apply(this, args))); // 8
        // return f.call(this, g.call(this, h.call(this, args))); // 74 ([11] + 1 -> 111  111 * 2 = 222  222 / 3 = 74)
        // return f.call(this, g.call(this, h.call(this, args[0]))); // 8
    }
}

// 2
function compose(...funcs) {
    return function (...args) {
        // reduceRight
        return funcs.reduceRight((value, f) => f.call(this, value), args[0]);
    }
}

// 3
function compose(...funcs) {
    // console.log(funcs);
    // [ [Function: f3], [Function: f2], [Function: f1] ]
    // x = 11
    // 11 -> f1(11) -> f2(12) -> f3(24) -> 8
    return x => funcs.reduceRight((value, f) => f(value), x);
}

const f1 = x => x + 1;
const f2 = x => x * 2;
const f3 = x => x / 3;
console.log(compose(f3, f2, f1)(11)); // 8
// 11 + 1 = 12  12 * 2 = 24  24 / 3 = 8
const f = compose(f3, f2, f1);
// console.log(f); // [Function (anonymous)]
console.log(f(11)); // 8

// console.log(f1.call(this, 11)); // 11 + 1 = 12 (number)
// console.log(f1.call(this, [11])); // [11] + 1 = 111 (string)
// console.log(f1.apply(this, [11])); // 11 + 1 = 12 (number)