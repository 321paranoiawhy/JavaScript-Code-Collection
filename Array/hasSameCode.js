function hasSameCode(object) {
    let string = JSON.stringify(object);
    // console.log(string);

    // 1. '"code":"123'.slice(8)
    // let regex = /"code":"\d*/g;
    // let match = string.match(regex).map(item => item.slice(8));
    // console.log(match);

    // 2. '123'
    let regex = /(?<="code":")\d*/g;
    let match = string.match(regex);
    console.log(match);
    return new Set(match).size !== match.length;
}

let obj1 = [{ name: '张三', code: '123' }, { name: '李四', code: '452' }, { name: '王五', code: '123' }];
// console.log(new Set(obj1.map(item => item.code)).size !== obj1.length); // true
console.log(hasSameCode(obj1)); // true

let obj2 = [{ name: { code: '123' } }, { name: '李四', code: '456' }, { name: '王五', code: '789' }];
console.log(hasSameCode(obj2)); // false