let [a, b] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split(' ').map(Number);
//<3, 6, 2, 7, 5, 1, 4>
let queue = [];
let arr = [];

for (let i = 0; i < a; i++) {
    arr.push(i + 1);
}

let count = 1;
while (arr.length) {
    let data = arr.shift();
    if (count % b === 0) {
        queue.push(data);
    } else {
        arr.push(data);
    }
    count++;
}

console.log(`<${queue.join(', ')}>`);