let [len, ...a] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
let queue = [];
let answer = [];

const dequeMap = {
    push_front: (x) => queue.unshift(x),
    push_back: (x) => queue.push(x),
    pop_front: () => queue.shift() || -1,
    pop_back: () => queue.pop() || -1,
    getSize: () => queue.length,
    isEmpty: () => queue.length === 0 ? 1 : 0,
    front: () => queue[0] || -1,
    back: () => queue[queue.length - 1] || -1,
};

for (let i in a) {
    if (a[i].includes("push_front")) {
        dequeMap.push_front(a[i].split(" ")[1]);
    } else if (a[i].includes("push_back")) {
        dequeMap.push_back(a[i].split(" ")[1]);
    } else if (a[i].includes("pop_front")) {
        answer.push(dequeMap.pop_front());
    } else if (a[i].includes("pop_back")) {
        answer.push(dequeMap.pop_back());
    } else if (a[i].includes("size")) {
        answer.push(dequeMap.getSize());
    } else if (a[i].includes("empty")) {
        answer.push(dequeMap.isEmpty());
    } else if (a[i].includes("front")) {
        answer.push(dequeMap.front());
    } else if (a[i].includes("back")) {
        answer.push(dequeMap.back());
    }
}

console.log(answer.join('\n'));