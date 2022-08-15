// Possible Solution: https://blog.csdn.net/magicbean2/article/details/78881899

function splitLoopedString(strs) {
    let s = "";
    let result = "a";
    const { length } = strs;
    for (let i = 0; i < length; ++i) {
        let reverse = strs[i].split("").reverse().join("");
        reverse > strs[i] ? s += reverse : s += strs[i];
    }
    for (let i = 0, st = 0; i < length; st += strs[i++].length) {
        let p1 = strs[i], p2 = strs[i].split("").reverse().join("");
        let body = s.substr(st + p1.length) + s.substr(0, st);
        for (let j = 0; j < strs[i].length; ++j) {
            if (p1[j] >= result[0]) {
                let temp = p1.substr(j) + body + p1.substr(0, j);
                result > temp ? "" : result = temp;
            }
            if (p2[j] >= result[0]) {
                let temp = p2.substr(j) + body + p2.substr(0, j);
                result > temp ? "" : result = temp;
            }
        }
    }
    return result;
}

console.log(splitLoopedString(["abc", "xyz"])); // "zyxcba"