let [, NCards, , MCards] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

NCards = new Set(NCards.split(' '));
MCards = MCards.split(' ');
let answer = [];

for (const card of MCards) {
    NCards.has(card) ? answer.push(1) : answer.push(0);
}

console.log(answer.join(' '));