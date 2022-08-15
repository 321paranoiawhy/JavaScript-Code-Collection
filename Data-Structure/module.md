# JavaScript Module

## Reference

* [JavaScript modules - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [Modules, introduction - JAVASCRIPT.INFO](https://javascript.info/modules-intro)
* [Understanding module.exports and exports in Node.js](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)

# CommonJS(CJS)

## exports & require

In `add.js`, function `add` is added to properties of `exports` object(root of a module):

```JavaScript
// add.js

function add(a, b) {
    return a + b;
}

exports.add = add;
// module.exports.add = add;
```

In `main.js`, load the function of module `add.js` and use it:

```JavaScript
// main.js

const { add } = require('./app.js');

console.log(add(1 + 2)); // 3
```

## Reference

* [CommonJS modules - Node.js](https://nodejs.org/api/modules.html#modules-commonjs-modules)
* [CommonJS - Wikipedia](https://en.wikipedia.org/wiki/CommonJS)
* [Node.js: exports vs module.exports](https://www.hacksparrow.com/nodejs/exports-vs-module-exports.html)
* [The module object - Node.js](https://nodejs.org/api/modules.html#modules_the_module_object)
* [Modules exports shortcut - Node.js](https://nodejs.org/api/modules.html#modules_exports_shortcut)

# ES Module(ESM):

## export and import statements

In `add.mjs`, export a function:

```JavaScript
// add.mjs

function add(a, b) {
    return a + b;
}

export { add };
```

In `main.mjs`, import the function from `add.mjs` and use it:

```JavaScript
// main.mjs

import { add } from "./add.mjs"

console.log(add(1 + 2)); // 3
```

## Reference

* [ECMAScript modules - Node.js](https://nodejs.org/api/esm.html#introduction)
* [Understanding ES6 Modules](https://www.sitepoint.com/understanding-es6-modules/)