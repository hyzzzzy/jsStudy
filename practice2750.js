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

console.log(selectionSort(a).join('\n'));
console.log(insertionSort(a).join('\n'));
console.log(bubbleSort(a).join('\n'));