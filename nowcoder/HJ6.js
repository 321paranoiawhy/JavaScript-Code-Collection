// Reference: https://www.nowcoder.com/practice/196534628ca6490ebce2e336b47b3607?tpId=37&rp=1&ru=%2Fexam%2Foj%2Fta&qru=%2Fexam%2Foj%2Fta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=&judgeStatus=&tags=&title=&gioEnter=menu

// 实质为 整数的质因数分解
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", function (line) {
    if (line === 1) {
        console.log(line);
    }
    else {
        let result = "";
        let i = 2;
        while (line > 1) {
            if (line % i === 0) {
                // 不断用 i 除 line
                line /= i;
                result += ` ${i}`;
            }
            else i++;
        }
        console.log(result.trim());
    }
});
// 输入 2000000014
// 输出 2 1000000007