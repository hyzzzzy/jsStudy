let [, A, B] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
A = A.split(' ').map(Number).sort((a, b) => a - b); //오름차순
B = B.split(' ').map(Number).sort((a, b) => b - a); //내림차순
let result = 0;

for (let i = 0; i < A.length; i++) {
    result += A[i] * B[i];
}
console.log(result);