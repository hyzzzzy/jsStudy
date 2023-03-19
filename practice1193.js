let a = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let count = 0;
while (a > 0) {
    count++;
    a -= count;
}

if (count % 2 === 0) {
    console.log(`${a + count}/${1 + -a}`);
} else {
    console.log(`${1 + -a}/${a + count}`);
}