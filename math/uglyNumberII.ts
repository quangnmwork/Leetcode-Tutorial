const uglyArr = new Array(1691).fill(1);

const convert235 = (val) => [val * 2, val * 3, val * 5];

const initDp = (n: number) => {
    for (let i = 1; i < n; i++) {
        let temp = 999999999999999;
        for (let j = i - 1; j >= 0; j--) {
            const [val2, val3, val5] = convert235(uglyArr[j]);
            if (val2 > uglyArr[i - 1] && temp > val2) temp = val2;
            if (val3 > uglyArr[i - 1] && temp > val3) temp = val3;
            if (val5 > uglyArr[i - 1] && temp > val5) temp = val5;
            // if (i == 3) console.log(temp, uglyArr[j], convert235(uglyArr[j]));
        }
        uglyArr[i] = temp;
    }
};

initDp(1691);

function nthUglyNumber(n: number): number {
    return uglyArr[n - 1];
}

const testcase = [1, 10, 4, 5, 11];

testcase.forEach((val) => console.log(nthUglyNumber(val)));
