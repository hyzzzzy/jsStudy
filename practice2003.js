let [a, ...b] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let [len, sum] = a.split(' ').map(Number);
let arr = b.toString().trim().split(' ').map(Number);

let count = 0;

for (let i = 0; i < len; i++) {
    let sum_arr = arr[i];
    let idx = i;

    while (sum_arr < sum && idx < len - 1) {
        sum_arr += arr[++idx];
    }

    if (sum_arr === sum) {
        count++;
    }
}
console.log(count);