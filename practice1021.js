/**
 * 지민이는 N개의 원소를 포함하고 있는 양방향 순환 큐를 가지고 있다. 지민이는 이 큐에서 몇 개의 원소를 뽑아내려고 한다.
지민이는 이 큐에서 다음과 같은 3가지 연산을 수행할 수 있다.

1. 첫 번째 원소를 뽑아낸다. 이 연산을 수행하면, 원래 큐의 원소가 a1, ..., ak이었던 것이 a2, ..., ak와 같이 된다.
2. 왼쪽으로 한 칸 이동시킨다. 이 연산을 수행하면, a1, ..., ak가 a2, ..., ak, a1이 된다.
3. 오른쪽으로 한 칸 이동시킨다. 이 연산을 수행하면, a1, ..., ak가 ak, a1, ..., ak-1이 된다.

큐에 처음에 포함되어 있던 수 N이 주어진다. 그리고 지민이가 뽑아내려고 하는 원소의 위치가 주어진다. 
(이 위치는 가장 처음 큐에서의 위치이다.) 
이때, 그 원소를 주어진 순서대로 뽑아내는데 드는 2번, 3번 연산의 최솟값을 출력하는 프로그램을 작성하시오.
 */
let [NM, a] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
[N, M] = NM.split(' ').map(Number);
a = a.split(' ').map(Number);
let count = 0;

const queue = Array.from({length: N}, (v, i) => i + 1);

function moveLeft(arr) {
    arr.push(arr.shift());
}

function moveRight(arr) {
    arr.unshift(arr.pop());
}

/**
 * 10 3
 * 2 9 5 이면
 * 
 * queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * a[0] = 2 
 * moveLeft 1번 실행 -> queue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
 * 2 shift()
 * 
 * queue = [3, 4, 5, 6, 7, 8, 9, 10, 1]
 * a[1] = 9
 * idx = 6
 * range = 4.5
 * moveRight 3번 실행 ->  [9, 10, 1, 3, 4, 5, 6, 7, 8]
 * 9 shift()
 * 
 * queue = [10, 1, 3, 4, 5, 6, 7, 8]
 * a[2] = 5
 * idx = 4
 * range = 4
 * moveLeft 4번 실행 -> [5, 6, 7, 8, 10, 1, 3, 4]
 * 5 shift()
 * 
 */

for (let i = 0; i < M; i++) {
    if (a[i] === queue[0]) { // 해당하는 원소면
        queue.shift(); // 바로 첫번째 원소를 뽑아냄
    } else {
        let idx = queue.indexOf(a[i]); 
        let range = queue.length / 2; // 왼쪽 값을 뽑을 지 오른쪽 값을 뽑을 지의 기준

        if (idx <= range) { 
            for (let j = 0; j < idx; j++) {
                moveLeft(queue);
                count++;
            }
        } else {
            for (let j = 0; j < queue.length - idx; j++) {
                moveRight(queue);
                count++;
            }
        }
        queue.shift();
    }
}
console.log(count);