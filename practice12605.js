const [a, ...b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < b.length; i++) {
    console.log(`Case #${i + 1}: ${b[i].split(" ").reverse().join(" ")}`);
} 