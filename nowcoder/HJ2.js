// Reference: https://www.nowcoder.com/practice/a35ce98431874e3a820dbe4b2d0508b1?tpId=37&rp=1&ru=%2Fexam%2Foj%2Fta&qru=%2Fexam%2Foj%2Fta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=&judgeStatus=&tags=&title=&gioEnter=menu

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let row = [];
rl.on("line", function (line) {
    row.push(line);
    if (row.length === 2) rl.close();
});
rl.on("close", function () {
    let string = [...row[0].toLowerCase()];
    let character = row[1].toLowerCase();
    console.log(string.length - string.filter(item => item !== character).length);
});

// function characterRepeatTimes(string, character) {
//     return string.length - [...string.toLowerCase()].filter(item => item !== character.toLowerCase()).length;
// }
// console.log(characterRepeatTimes("ABCabc", "A")); // 2
