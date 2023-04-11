let [N, ...ropes] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n').map(Number);
ropes.sort((a, b) => a - b);
let result = [];

for (let i = 0; i < N; i++) {
    result.push(ropes[i] * (N - i));
}

console.log(Math.max(...result));