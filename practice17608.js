let [len, ...a] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
a = a.map((n) => { 
    return parseInt(n) 
});
let max = a[len - 1];
let count = 1;

for (let i = len - 2; i >= 0; i--) {
    if (max < a[i]) {
        count++;
        max = a[i];
    }
}
console.log(count);