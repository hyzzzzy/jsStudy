/**
 * 병든 나이트가 N × M 크기 체스판의 가장 왼쪽아래 칸에 위치해 있다. 병든 나이트는 건강한 보통 체스의 나이트와 다르게 4가지로만 움직일 수 있다.

2칸 위로, 1칸 오른쪽 N = N - 2, M = M + 1
1칸 위로, 2칸 오른쪽 N = N - 1, M = M + 2
1칸 아래로, 2칸 오른쪽 N = N + 1, M = M + 2
2칸 아래로, 1칸 오른쪽 N = N + 2, M = M + 1
병든 나이트는 여행을 시작하려고 하고, 여행을 하면서 방문한 칸의 수를 최대로 하려고 한다. 
병든 나이트의 이동 횟수가 4번보다 적지 않다면, 이동 방법을 모두 한 번씩 사용해야 한다. 
이동 횟수가 4번보다 적은 경우(방문한 칸이 5개 미만)에는 이동 방법에 대한 제약이 없다.

체스판의 크기가 주어졌을 때, 병든 나이트가 여행에서 방문할 수 있는 칸의 최대 개수를 구해보자.

첫째 줄에 체스판의 세로 길이 N와 가로 길이 M이 주어진다. N과 M은 2,000,000,000보다 작거나 같은 자연수이다.

병든 나이트가 여행에서 방문할 수 있는 칸의 개수중 최댓값을 출력한다.

선택 절차(Selection Procedure): 현재 상태에서의 최적의 해답을 선택한다.
적절성 검사(Feasibility Check): 선택된 해가 문제의 조건을 만족하는지 검사한다.
해답 검사(Solution Check): 원래의 문제가 해결되었는지 검사하고, 해결되지 않았다면 선택 절차로 돌아가 위의 과정을 반복한다.
 */

let [N, M] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split(' ').map(Number);

let count = 0;

if (N === 1) { //위 아래로 한 칸도 움직일 수 없음, 현재 존재하는 칸 외에 이동 가능한 칸 X
    count = 1;
} else if (N == 2) {
    /**
     * 위 아래로 한 칸 움직일 수 있음, M에서 현재 위치한 칸 수 1을 제외한 2로 나눈만큼 가로로 2칸씩 이동 가능
     * 이동 가능 횟수는 최대 3번(4번 이상 이동 시 4가지 이동 방법을 모두 사용해야 하기 때문)이므로 
     * 이동 가능 횟수는 3과 (M-1)//2 중 작은 값이 된다. 나이트가 방문한 칸 수 = 이동 가능 횟수 + 1이므로 
     * 나이트가 방문한 칸 수는 4와 (M-1)//2+1 중 작은 값과 같다. 
     * (나이트가 방문한 칸 수 = 이동 가능 횟수 +1인 이유는 
     * 이동하면서 오른쪽으로 무조건 한 칸 이상 움직여야 하므로 여행 중 동일한 칸을 중복하여 방문할 수는 없기 때문이다. 
     * 따라서 첫 번째 칸과 이동 중 방문한 칸(=이동 횟수)을 더한 값과 나이트가 방문한 칸 수는 동일하다.)
     */
    count = Math.min(4, (M-1) / 2 + 1);
} else if (M < 7) {
    /**
     * N이 3과 같거나 3보다 크기 때문에 세로로는 위, 아래 두 칸씩 이동이 가능하므로 
     * 최대로 이동하기 위해서는 오른쪽으로 한 칸씩만 이동한다. 오른쪽으로 한 칸씩 이동하는 경우 최대 이동 횟수는 M-1이다. 
     * 하지만 최대 이동 횟수는 3보다 큰 값을 가질 수 없다. (4번 이상 이동 시 4가지 이동 방법을 모두 사용해야 하기 때문) 
     * 따라서 이동 가능 횟수는 3과 M-1 중 작은 값과 같으며 방문한 칸 수는 4와 M 중 작은 값과 같다.
     */
    count = Math.min(4, M);
} else {
    /**
     * N이 3보다 크거나 같다면 위, 아래로 이동할 수 있기 때문에 이동 경로에 영향을 주지 않게 된다. 
     * 하지만 나이트가 오른쪽으로만 이동하기 때문에 4가지 이동 방법 중 1,4번의 이동을 반복하는 것이 
     * 최대 이동 횟수를 만들기에 유리하다. 하지만 2,3번 이동 또한 한 번은 이루어져야 하기 때문에 
     * 이동 횟수는 (2(2,3번 이동 1회씩)+(M-5)(M에서 나이트가 처음 있던 한 칸과 2,3번 이동으로 인한 4칸을 뺀 값))이며 
     * 최대 방문 가능한 칸 수는 이동 횟수 +1이다.
     */
    count = (2 + (M - 5)) + 1;
}

console.log(Math.floor(count));