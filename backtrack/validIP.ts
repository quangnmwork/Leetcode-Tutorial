const checkIsValidIp = (s: string) => {
    return s[0] !== '0 ' && +s <= 255 && +s >= 1 && s.length;
};

function restoreIpAddresses(s: string) {
    const resArr: string[] = [];

    function dfs(s: string, curRes: string[] = []) {
        if (curRes.length > 4) return;

        if (curRes.length === 4 && s.length == 0) {
            resArr.push(curRes.join('.'));
            return;
        }

        for (let i = 1; i <= 3; i++) {
            if (s.length < i) break;

            const temp = s.slice(0, i);
            if ((temp.length > 1 && temp[0] == '0') || +temp > 255) break;

            dfs(s.slice(i), [...curRes, temp]);
        }
    }

    dfs(s, []);

    return resArr;
}

restoreIpAddresses('25525511135');
