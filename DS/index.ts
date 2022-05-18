function longestCommonPrefix(strs: string[]) {
    const sortStr = strs.sort((a, b) => b.length - a.length);
    const longestStr = sortStr[0];
    let res = '';
    for (let i = 0; i < longestStr.length; i++) {
        let compareChar = longestStr[i];
        let cnt = 0;

        if (i > sortStr.slice(-1)[0].length) break;

        for (let j = 0; j < sortStr.length; j++) {
            if (!(sortStr[j][i] && sortStr[j][i] === compareChar)) break;
            else cnt++;
        }

        if (cnt === sortStr.length) res += compareChar;
    }
    console.log(res);
    return res;
}

longestCommonPrefix(['flower', 'flower', 'flower', 'flower']);
