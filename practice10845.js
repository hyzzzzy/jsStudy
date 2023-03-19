let [len, ...a] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let queue = [];
let answer = [];

const queueMap = {
    push: (x) => queue.push(x),
    pop: () => queue.shift() || -1,
    getSize: () => queue.length,
    isEmpty: () => queue.length === 0 ? 1 : 0,
    front: () => queue[0] || -1,
    back: () => queue[queue.length - 1] || -1,
};

for (let i in a) {
    if (a[i].includes("push")) {
        queueMap.push(a[i].split(" ")[1]);
    } else if (a[i].includes("pop")) {
        answer.push(queueMap.pop());
    } else if (a[i].includes("size")) {
        answer.push(queueMap.getSize());
    } else if (a[i].includes("empty")) {
        answer.push(queueMap.isEmpty());
    } else if (a[i].includes("front")) {
        answer.push(queueMap.front());
    } else if (a[i].includes("back")) {
        answer.push(queueMap.back());
    }
}

console.log(answer.join('\n'));