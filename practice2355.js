let [a, b] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split(' ').map(Number);
let sum = 0;

/**
 * 시그마 공식 1~n 까지의 합 => n(n+1) / 2
 * (수의 개수) * (끝 수 + 첫 수) / 2
 */


if (a > b) {
    sum = (a - b + 1) * (b + a) / 2; 
} else {
    sum = (b - a + 1) * (b + a) / 2;
}

console.log(sum);