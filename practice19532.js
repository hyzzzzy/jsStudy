let [a, b, c, d, e, f] = require('fs')
    .readFileSync(__dirname + '/input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

function calcByBruteForce(a, b, c, d, e, f) {
    for (let x = -999; x <= 999; x++) {
        for (let y = -999; y <= 999; y++) {
            if (a * x + b * y === c && d * x + e * y === f) {
                return `${x} ${y}`;
            }
        }
    }
}

function calcByEquation(a, b, c, d, e, f) {
    let y = ((c * d) - (f * a)) / ((b * d) - (e * a));
    let x = ((c * e) - (b * f)) / ((a * e) -  (b * d));
    return `${x} ${y}`;
}

//console.log(calcByBruteForce(a, b, c, d, e, f));
console.log(calcByEquation(a, b, c, d, e, f));