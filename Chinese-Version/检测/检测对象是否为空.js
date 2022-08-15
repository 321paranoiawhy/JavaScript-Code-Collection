const isEmptyObject = (obj) => {
    // null
    if (obj === null) return 'This is null, rather than an object.';

    // undefined
    if (typeof obj === "undefined") return 'This is undefined, rather than an object.';

    // NaN
    if (Number.isNaN(obj)) return 'This is NaN, rather than an object.';

    // Infinity
    if (obj === Infinity) return 'This is Infinity, rather than an object.';
    // -Infinity
    if (obj === -Infinity) return 'This is -Infinity, rather than an object.';

    // primitive values except null, undefined, NaN, or Infinity
    // number, string, boolean, bigint, symbol
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#javascript_types
    if (typeof obj !== 'object' && typeof obj !== 'function') return `This is a ${typeof obj}.`;

    // Array
    if (Array.isArray(obj)) return 'This is an Array object.';

    // Map WeakMap
    // Set WeakSet
    // 1. instanceOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
    // obj instanceOf Map
    // 2. Object.prototype.constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
    // 3. Object.prototype.toString.call(obj).slice(8, -1) === "Map"
    // 4. Object.prototype.isPrototypeOf(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
    // Map.prototype.isPrototypeOf(obj)
    if (obj.constructor === Map) return 'This is a Map object.';
    if (obj.constructor === WeakMap) return 'This is a WeakMap object.';
    if (obj.constructor === Set) return 'This is a Set object.';
    if (obj.constructor === WeakSet) return 'This is a WeakSet object.';

    // Arrow functions do not have a prototype property.: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#use_of_prototype_property
    if (obj.constructor === Function) {
        return obj.prototype === undefined ? 'This is an arrow function object.' : 'This is a function object.';
    }

    // class
    // https://github.com/hyurl/could-be-class
    if (obj.constructor.toString().slice(0, 5) === "class") return 'This is a class object.';

    for (let item in obj) {
        // not empty object
        return false;
    }
    // empty object
    return true;
};

console.log(isEmptyObject(null)); // 'This is null, rather than an object.'
console.log(isEmptyObject(undefined)); // 'This is undefined, rather than an object.'
console.log(isEmptyObject(NaN)); // 'This is NaN, rather than an object.'
console.log(isEmptyObject(Infinity)); // 'This is Infinity, rather than an object.'
console.log(isEmptyObject(-Infinity)); // 'This is -Infinity, rather than an object.'
console.log(isEmptyObject(1));  // 'number'
console.log(isEmptyObject("1")); // 'string'
console.log(isEmptyObject(true)); // 'boolean'
console.log(isEmptyObject(BigInt(1))); // 'bigint'
console.log(isEmptyObject(Symbol(1))); // 'symbol'

console.log(isEmptyObject([])); // 'This is an array object.'

console.log(isEmptyObject(new Map())); // 'This is a Map object.'
console.log(isEmptyObject(new WeakMap())); // 'This is a WeakMap object.'
console.log(isEmptyObject(new Set())); // 'This is a Set object.'
console.log(isEmptyObject(new WeakSet())); // 'This is a WeakSet object.'

console.log(isEmptyObject(function () { })); // 'This is a function object.'
console.log(isEmptyObject(() => { })); // 'This is an arrow function object.'

class test {

}
console.log(isEmptyObject(new test())); // 'This is a class object.'

console.log(isEmptyObject({})); // true
console.log(isEmptyObject({ Age: "100" })); // false