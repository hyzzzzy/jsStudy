let [a, b] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split(' ').map(BigInt);
console.log((a + b).toString()); //출력할때 n이 붙은채로 출력되면 오류가 발생해 toStiring