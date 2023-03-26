let a = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n').map(Number);

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if (!this.head) this.head = node;
        else {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
        this.length++;
        return node;
    }
    
    getHead() {
        return this.head.value;
    }

    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    getSize() {
        return this.length;
    }
}

const queue = new LinkedList();

for (let i = 1; i <= a; i++) {
    queue.push(i);
}

while (queue.getSize() > 1) {
    queue.removeHead();
    queue.push(queue.getHead());
    queue.removeHead();
}
console.log(queue.getHead());