// Reference: https://www.nowcoder.com/practice/8f3df50d2b9043208c5eed283d1d4da6?tpId=37&rp=1&ru=%2Fexam%2Foj%2Fta&qru=%2Fexam%2Foj%2Fta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=&judgeStatus=&tags=&title=&gioEnter=menu

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", function (line) {
    console.log(Number(line).toString());
});