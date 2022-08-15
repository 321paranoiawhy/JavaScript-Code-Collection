// https://stackoverflow.com/questions/10480108/is-there-any-way-to-check-if-strict-mode-is-enforced

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
"use strict";
// ES6 module and class are both in strict mode by default
// once you have set strict mode to true, you can not set it back to sloppy mode: https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode

let isStrictMode = (function () {
    return typeof this === 'undefined';
})();

console.log(isStrictMode); // true