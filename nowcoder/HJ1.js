// Reference: https://www.nowcoder.com/practice/8c949ea5f36f422594b306a2300315da?tpId=37&tqId=21224&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", function (line) {
    console.log(line.length - line.lastIndexOf(" ") - 1);
});

// function lastWordLength(string = input) {
//     return string.length - string.lastIndexOf(" ") - 1;
// }
// console.log(lastWordLength("Hello nowcoder")); // 8