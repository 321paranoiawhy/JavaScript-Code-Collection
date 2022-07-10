function validTag(string) {
    // 1. self closing tags
    // 1.1 <!DOCTYPE> <!doctype>
    if (string.toUpperCase().startsWith("<\!DOCTYPE") && string.endsWith(">")) return true;

    // 1.2 <meta> <base> <br> <hr> <img> <link> <area> <input> <source> <col> <frame> <param> <embed> <keygen>
    // starts with <meta|<base|<br|<hr|<img|<link|<area|<input|<source|<col|<frame|<param|<embed|<keygen
    let selfClosingTagsRegex = /^<(meta|base|br|hr|img|link|area|input|source|col|frame|param|embed|keygen)/;
    // ends with >
    if (string.endsWith(">") && selfClosingTagsRegex.test(string)) {
        return true;
    }

    // 2. grouping tags

    // 3. not above
    return false;
}

// !DOCTYPE
console.log(validTag("<!DOCTYPE html>")); // true
console.log(validTag("<!doctype html>")); // true

// meta
console.log(validTag("<meta>")); // true
console.log(validTag("<meta >")); // true
console.log(validTag('<meta charset="UTF-8">')); // true
// console.log(validTag("<meta charset="UTF - 8">")); // Uncaught SyntaxError
console.log(validTag("< meta>")); // false

// base
console.log(validTag("<base>")); // true
console.log(validTag("base>")); // false
console.log(validTag("<base")); // false


console.log(validTag("<p></p>")); // true
console.log(validTag("<div>")); // false


// https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element
// console.log(validTag("<p></p>"));

// https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element
// console.log(validTag("<img>")); // true

// https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element
// console.log(validTag("<br>")); // true
// XHTML
// console.log(validTag("<br/>")); // true
// console.log(validTag("<br />")); // true
// console.log(validTag("<br></br>")); // false
