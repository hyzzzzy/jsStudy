let a = require('fs').readFileSync(__dirname + '/input.txt').toString().trim();

// - 를 기준으로 나누고 +끼리 전부 더하기
// 만약 55 - 50+40+1+1+1 - 3 이면
let num = a.split('-').map((str) => {
    //str = 55, 50+40+1+1+1, 3
    return str.split('+').map(Number).reduce((p, c) => p + c, 0);
}); 
//num = [ 55, 93, 3 ] -> 첫번째 원소에서 나머지 원소 빼기
let result = num.reduce((p, c) => p - c, num[0] * 2);
console.log(result);