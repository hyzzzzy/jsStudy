let [up, down, goal] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split(' ').map(Number);
let day = (goal - down) / (up - down);

// (높이 - 밤에 미끄러지는 수 -> 밤에 미끄러지는 수를 빼야 아침에 목표에 도착해도 떨어지지않음) / (아침에 이동하는 수 - 밤에 미끄러지는 수)
console.log(Math.ceil(day));