function convertStr(s: string) {
    let res = '';
    let temp = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i - 1] && s[i - 1]) temp += +s[i];
        else {
            if (s[i - 1]) res += `${temp / +s[i - 1]}${s[i - 1]}`;
            temp = +s[i];
        }
    }

    if (temp) res += `${temp / +s.slice(-1)[0]}${+s.slice(-1)[0]}`;

    return res;
}

function solve(n: number) {
    let res = '1';

    let id = 1;
    while (id <= n - 1) {
        res = convertStr(res);
        id++;
    }
    return res;
}
function countAndSay(n: number) {
    return solve(n);
}
