let answer = Array(10000).fill(true);

function d(n) {
    let str = n.toString();
    let sum = n;
    for (let j = 0; j < str.length; j++) {
        sum += parseInt(str[j]);
    }
    return sum;
}

for (let i = 1; i <= 10000; i++) {
    answer[d(i)] = false;
}

for (let j = 1; j <= 10000; j++) {
    if (answer[j]) {
        console.log(j);
    }
}