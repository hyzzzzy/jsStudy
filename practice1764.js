//let input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

// let [N, M] = input
//     .shift()
//     .split(" ")
//     .map(Number);
// console.log(input);

// let peopleN = new Set();
// let peopleM = new Set();

// for (let i = 0; i < input.length; i++) {
//     if (i < N) {
//         peopleN.add(input[i]);
//     } else {
//         peopleM.add(input[i]);
//     }
// }
// let result = [];
// peopleN.forEach((item) => {
//     if (peopleM.has(item)) {
//         result.push(item);
//     }
// });
// result.sort();

// console.log(result.length);
// console.log(result.join("\n"));

let [NM, ...a] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
let notListen = new Set();
let notSee = new Set();
let result = [];

for (let i = 0; i < a.length; i++) {
    if (i < N) notListen.add(a[i]);
    else notSee.add(a[i]);
}

notListen.forEach((name) => {
    console.log(name);
})
console.log('--------')
notSee.forEach((name) => {
    console.log(name)
})

notListen.forEach((name) => {
    if (notSee.has(name)) {
        result.push(name);
    }
});

result.sort();
console.log(result.length);
console.log(result.join('\n'));