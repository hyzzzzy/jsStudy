let [a, ...coins] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
let [N, K] = a.split(' ').map(Number);
coins = coins.map(Number);
let count = 0;
let temp = 0;

for (let i = N - 1; i >= 0; i--) {
    if (coins[i] <= K) {
        temp = count;
        count += Math.floor(K / coins[i]);
        temp = count - temp;
        K -= temp * coins[i];
        console.log(`지금 ${coins[i]}원, count: ${count} K: ${K}`)
    }
}
console.log(count);