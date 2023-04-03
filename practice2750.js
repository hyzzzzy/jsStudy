let [len, ...a] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n').map(Number);
/**
 * 선택정렬: 원소의 최솟값을 찾고 그 값을 맨 앞 원소와 교체
 * 맨 앞 원소를 제외하고 다시 나머지 리스트들 같은 방법으로 정렬
 * -> 시간복잡도 O(n^2)
 */
function selectionSort(arr) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
/**
 * 삽입정렬: 배열의 두번째 요소를 선택해 차례대로 이미 정렬된 앞 배열과 비교
 * 자신의 위치를 찾아서 삽입
 * -> 평균 시간복잡도 O(n^2), 최선 시간복잡도 O(n)
 */
function insertionSort(arr) {
    for (let i = 1; i < a.length; i++) {
        let curr = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j--];
        }
        arr[j + 1] = curr;
    }
    return arr;
}
/**
 * 버블정렬: 두 원소의 크기를 비교하여 앞의 원소가 뒤의 원소보다 크면 교환
 * 배열의 변화가 없을 때까지 반복
 * -> 평균 시간복잡도 O(n^2), 최선 시간복잡도 O(n)
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
/**
 * 병합 정렬: 데이터들을 계속 반 씩 쪼개고 하나로 합치는 과정에서 정렬을 하는 정렬 알고리즘, 분할 정복 알고리즘
 * 매 번 새로운 배열을 만들어 내므로 메모리 사용량이 퀵정렬에 비해 큼
 * 퀵에 비해 stable함
 * 시간 복잡도 O(nlogn)
 */
const merge = (left, right) => {
    const result = [];
    while (left.length && right.length) {
        result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return [...result, ...left, ...right];
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

/**
 * 퀵 정렬: pivot을 정하고 pivot보다 작은 값들은 왼쪽, 큰 값들은 오른쪽으로 보내고 분할된 리스트를 정렬하고
 * 정렬된 리스트들을 합해 전체가 정렬된 리스트가 되게 하는 방법
 * 분할 정복 알고리즘
 * 병합정렬과 달리 다른 메모리 공간을 사용하지 않음
 * -> 재귀 콜 스택을 위한 메모리만 사용됨
 * 병합에 비해 unstable (원소 들 중 같은 값이 있다면 정렬 이후 순서가 초기 순서와 달라질 수 있음)
 * 평균 시간 복잡도 O(nlogn), 최악(이미 정렬된 배열) 시간복잡도 O(n^2)
 */
function quickSort(arr) {
    //배열의 길이가 1과 같거나 작게 될 경우 배열을 바로 리턴한다.
    if (arr.length <= 1) return arr;

    //배열 가운데 하나의 원소를 고르고 pivot 이라고 한다, 첫번째 인덱스를 pivot으로
    const pivot = arr[0];
    const left = [];
    const right = [];

    //배열 안에서 pivot을 제외한 모든 요소를 탐색해서 pivot보다 작으면 left, 크면 right라는 배열에 넣는다.
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    //left와 right에 값이 모두 넣어졌으면 각각의 배열에 대해 quickSort를 재귀하도록 해서 다시 정렬한다.
    const lSorted = quickSort(left);
    const rSorted = quickSort(right);
    return [...lSorted, pivot, ...rSorted];
}

/**
 * 힙 정렬: 힙 생성 알고리즘 사용(특정 노드의 자식 중에서 큰 자식과 자신의 위치를 바꿈, 바꾼 후에도 자식이 존재
 * 하면 비교 연산으로 더 큰 자식과 자신의 위치를 바꾸어야 함) 따라서 최대 힙의 경우 루트 노드의 원소는 가장 큰 수
 * 부모 트리는 모든 경우에 자식 트리보다 큼
 * 인덱스 i를 기준으로 왼쪽 자식 2 * i + 1, 오른쪽 자식 2 * i + 2
 * 최대 힙의 루트노드와 맨 끝 노드를 비교해서 루트 노드가 맨 끝 노드보다 크면 서로 swap
 * 시간 복잡도 O(nlogn)
 */
function heapSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr = heapify(arr, i);

        if (arr[0] > arr[i]) 
            [arr[i], arr[0]] = [arr[0], arr[i]]
    }
    return arr;
}

function heapify(arr, last) {
    //console.log(last, parseInt(last / 2) - 1)
    for (let i = parseInt(last / 2) - 1; i >= 0; i--) { //i 초기값은 부모 노드
        const left = arr[i * 2 + 1];
        const right = arr[i * 2 + 2];

        if (left >= right && arr[i] < left) { //왼쪽 자식 노드가 부모, 오른쪽 형제노드보다 클 때
            [arr[i], arr[i * 2 + 1]] = [left, arr[i]]; //부모와 왼쪽 자식노드 자리 swap
        } else if (right > left && arr[i] < right) {
            [arr[i], arr[i * 2 + 2]] = [right, arr[i]];
        }
    }
    return arr;
}

// console.log(selectionSort(a).join('\n'));
// console.log(insertionSort(a).join('\n'));
// console.log(bubbleSort(a).join('\n'));
// console.log(mergeSort(a).join('\n'));
// console.log(quickSort(a).join('\n'));
console.log(heapSort(a).join('\n'));