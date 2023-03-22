let a = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split(' ').map(Number);
/**
 * 1
 * 2, 3, 4, 5, 6, 7 -> 6 * 1개
 * 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 -> 6 * 2개
 */
let count = 1;
while (a > 1) {
    a -= 6 * count;
    count++;
}
console.log(count);