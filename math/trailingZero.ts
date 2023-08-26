function calcDiv(n: number, val: number) {
    let cnt = 0;
    while (n % val === 0) {
        n = n / val;
        cnt++;
    }
    return cnt;
}

function calc5(n: number) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += calcDiv(i, 5);
    }
    return sum;
}

function calc2(n: number) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += calcDiv(i, 2);
    }
    return sum;
}

function trailingZeroes(n: number) {
    return Math.min(calc2(n), calc5(n));
}

console.log(trailingZeroes(10));
