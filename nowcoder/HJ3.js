// Reference: https://www.nowcoder.com/practice/3245215fffb84b7b81285493eae92ff0?tpId=37&rp=1&ru=%2Fexam%2Foj%2Fta&qru=%2Fexam%2Foj%2Fta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=&judgeStatus=&tags=&title=&gioEnter=menu

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let row = [];
rl.on("line", function (line) {
    row.push(line);
    if (row.length === row[0]) rl.close();
});
rl.on("close", function () {
    // 去重
    let temp = new Set(row.slice(1));
    // 排序
    temp = [...temp].sort((a, b) => a - b);
    // 逐行输出
    temp.forEach(item => console.log(item));
});