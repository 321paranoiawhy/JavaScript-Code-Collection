// Reference: https://www.nowcoder.com/practice/d9162298cb5a437aad722fccccaae8a7?tpId=37&rp=1&ru=%2Fexam%2Foj%2Fta&qru=%2Fexam%2Foj%2Fta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=&judgeStatus=&tags=&title=&gioEnter=menu

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", function (line) {
    if (line.length % 8 !== 0) {
        line = line.concat("0".repeat(8 - line.length % 8));
    }
    for (let i = 0; i < line.length; i += 8) {
        console.log(line.slice(i, i + 8));
    }
});