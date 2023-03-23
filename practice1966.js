let [len, ...a] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

for (let i = 0; i < len; i++) {
    let count = 1;
    let M = Number(a[i * 2].toString().split(' ')[1]);
    let order = a[i * 2 + 1].toString().split(' ').map(Number); 
    
    while (1) {
        let output = order.shift();
        //나온 값이 M이고 우선순위가 가장 높은 경우
        if (output >= Math.max(...order) && M === 0) {
            console.log(count);
            break;
        //나온 값이 M이지만 우선순위가 max가 아니면 맨뒤에 넣고 인덱스 변경
        } else if (output < Math.max(...order) && M === 0) {
            order.push(output);
            M = order.length - 1;
        //나온 값이 M이 아니고, 우선순위가 max가 아니면 다시 넣기
        } else if (output < Math.max(...order)) {
            order.push(output);
            M--;
        //나온 값이 M이지만 우선순위인 경우
        } else if (output >= Math.max(...order)) {
            count++;
            M--;
        }
    }
}