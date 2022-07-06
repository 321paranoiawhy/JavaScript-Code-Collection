// Reference: https://leetcode.com/problems/valid-sudoku/
// Possible solution: https://leetcode.com/problems/valid-sudoku/discuss/2027416/Official-solution-in-javascript-beats-82
// LeetCode-36

function isValidSudoku(board) {
    let length = board.length;
    let rowSet = new Array(length).fill(null).map(item => new Set());
    let columnSet = new Array(length).fill(null).map(item => new Set());
    let boxSet = new Array(length).fill(null).map(item => new Set());
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let element = board[i][j];
            // 1. element === "."
            if (element === ".") continue;

            // 2. check each row
            if (rowSet[i].has(element)) return false;
            else rowSet[i].add(element);

            // 3. check each column
            if (columnSet[j].has(element)) return false;
            else columnSet[j].add(element);

            // 4. check each box
            let box = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            if (boxSet[box].has(element)) return false;
            else boxSet[box].add(element);
        }
    }
    // isValidSudoku
    return true;
}

let board1 = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(isValidSudoku(board1)); // true

let board2 = [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(isValidSudoku(board2)); // false