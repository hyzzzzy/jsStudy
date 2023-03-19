let [len, ...a] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
a = a.map((n) => { 
    return parseInt(n) 
});
let rslt = [];

for (let i in a) {
    a[i] === 0 ? rslt.pop() : rslt.push(a[i]);
}
console.log(rslt.reduce((sum, a) => { return sum + a }, 0));