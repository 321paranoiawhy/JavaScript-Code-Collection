// typeCheck(): return the exact type of the value
function typeCheck(value) {
    // typeof null === "object"
    // 1. null: return "null"
    if (value === null) return "null";

    // 2. NaN: return "number NaN"
    // Number.isNaN()
    if (Number.isNaN(value)) return "number NaN";
    // NaN is the only value that is not equal to itself.
    // if (value !== value) return "number NaN";

    // 3. +Infinity & -Infinity
    // Infinity: return "number +Infinity"
    // -Infinity: return "number -Infinity"
    if (value === Infinity) return "number +Infinity";
    if (value === -Infinity) return "number -Infinity";

    // 4. not above: null, NaN, +Infinity, -Infinity
    // primitive types, rather than object types
    if (typeof (value) !== "object") return typeof (value);

    // 5. object types
    // Object.prototype.toString.call()
    // cause the first seven letters of the string is "object " (the last one is space), so we need to delete them.
    // at last, turn the string into lowercase (PascalCase initial)
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
return condition1 ? first : condition2 ? second : third;
console.log(typeCheck(1) === "number"); // true
console.log(typeCheck(1)); // number
console.log(typeCheck("1")); // string
console.log(typeCheck("")); // string
console.log(typeCheck(true)); // boolean
// null  undefined  NaN  Infinity  -Infinity
console.log(typeCheck(null));// null
console.log(typeCheck(undefined)); // undefined
console.log(typeCheck(NaN)); // number NaN
console.log(typeCheck(Infinity)); // number +Infinity
console.log(typeCheck(-Infinity)); // number -Infinity
// BigInt literals
console.log(typeCheck(1n)); // bigint
// BigInt()
console.log(typeCheck(BigInt(1))); // bigint
// Object wrapped BigInt (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#comparisons)
console.log(typeof (Object(1n))); // object
console.log(Object(1n) instanceof Object); // true
console.log(Object.prototype.toString.call(Object(1n))); // "[object BigInt]"
console.log(typeCheck(Object(1n))); // bigint
// {}  []
console.log(typeCheck({})); // object
console.log(typeCheck([])); // array
// Boolean
console.log(typeCheck(Boolean)); // function
console.log(typeCheck(Boolean())); // boolean
console.log(typeCheck(Boolean(1))); // boolean
console.log(typeCheck(new Boolean(1))); // boolean
// Number
console.log(typeCheck(Number)); // function
console.log(typeCheck(Number())); // number
console.log(typeCheck(Number("1"))); // number
console.log(typeCheck(new Number("1"))); // number
// Symbol
console.log(typeCheck(Symbol())); // symbol
console.log(typeof (Object(Symbol()))); // object
console.log(Object.prototype.toString.call(Object(Symbol()))); // "[object Symbol]"
console.log(typeCheck(Object(Symbol()))); // symbol
// Date  RegExp
console.log(typeCheck(new Date())); // date
console.log(typeCheck(new RegExp())); // regexp
// function
console.log(typeCheck(function () { })); // function
console.log(typeCheck(new function () { })); // object
console.log(typeCheck(function () { return this; }()));// browser: window  node: global
// Math
console.log(typeCheck(Math.sin)); // function
console.log(typeCheck(Math.sin())); // number NaN
console.log(typeCheck(Math.sin(1))); // number
// class
console.log(typeCheck(class { })); // function
console.log(typeCheck(class Person { })); // function
// new typeCheck()
console.log(typeCheck(new typeCheck())); // object
console.log(typeof (typeCheck(new typeCheck())) === "string"); // true
console.log(Object.prototype.toString.call(new typeCheck())); // "[object Object]"
console.log(typeof (Object.prototype.toString.call(new typeCheck())) === "string"); // true