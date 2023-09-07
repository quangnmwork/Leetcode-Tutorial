const compare = (a: string, b: string) => {
    const str1 = a + b;
    const str2 = b + a;

    if (str1 > str2) return 1;

    if (str2 > str1) return -1;

    return 0;
};

function largestNumber(nums: number[]) {
    const numSorted = nums
        .map((num) => {
            return num.toString();
        })
        .sort(compare);

    if (numSorted[numSorted.length - 1] === '0') return '0';

    let res = '';

    for (let i = numSorted.length - 1; i >= 0; i--) {
        res += numSorted[i];
    }
    return res;
}

console.log(largestNumber([3, 30, 34, 5, 9]));
