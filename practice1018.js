let [a, ...arr] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
let [row, col] = a.toString().trim().split(' ');
arr = arr.map((a) => a.trim('\r').split(''));
let answer = [];

const blackFirstChess = [
    ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
];

const whiteFirstChess = [
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
    ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
    ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
];

function setBlackFirstChess(x, y) {
    let count = 0;
    for (let i = x; i < x + 8; i++) {
        for (let j = y; j < y + 8; j++) {
            if (arr[i][j] !== blackFirstChess[i - x][j - y]) {
                count++;
            }
        }
    }
    return count;
}

function setWhiteFirstChess(x, y) {
    let count = 0;
    for (let i = x; i < x + 8; i++) {
        for (let j = y; j < y + 8; j++) {
            if (arr[i][j] !== whiteFirstChess[i - x][j - y]) {
                count++;
            }
        }
    }
    return count;
}

//row - 7, col - 7까지 해야 arr[8][8] 사이즈 일때도 돌 수 있음
for (let i = 0; i < row - 7; i++) {
    for (let j = 0; j < col - 7; j++) {
      answer.push(setWhiteFirstChess(i, j));
      answer.push(setBlackFirstChess(i, j));
    }
  }
  
  console.log(Math.min(...answer));