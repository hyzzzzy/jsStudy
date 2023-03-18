const [len, ...a] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
let stack = [];
let answer = [];

const stackMap = {
    push: x => stack.push(x),
    pop: () => stack.pop() || -1,
    getSize: () => stack.length,
    isEmpty: () => stack.length === 0 ? 1 : 0,
    top: () => stack.length === 0 ? -1 : stack[stack.length - 1]
}

for (let i in a) {
    if (a[i].includes("push")) {
        stackMap.push(a[i].split(" ")[1]);
    } else if (a[i].includes("pop")) {
        answer.push(stackMap.pop());
    } else if (a[i].includes("size")) {
        answer.push(stackMap.getSize());
    } else if (a[i].includes("empty")) {
        answer.push(stackMap.isEmpty());
    } else if (a[i].includes("top")) {
        answer.push(stackMap.top());
    }
}

console.log(answer.join('\n'));