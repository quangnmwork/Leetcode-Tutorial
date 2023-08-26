const formatStr = (s: string) => {
    return +s;
};

function compareString(s1: string, s2: string) {
    return formatStr(s1) === formatStr(s2);
}

function compareVersion(version1: string, version2: string) {
    const arrVer1 = version1.split('.');
    const arrVer2 = version2.split('.');

    const minId = Math.min(arrVer1.length, arrVer2.length);
    const maxId = Math.max(arrVer1.length, arrVer2.length);
    const maxVer =
        arrVer1.length > arrVer2.length
            ? { ver: arrVer1, verName: 1 }
            : { ver: arrVer2, verName: 2 };

    for (let i = 0; i < minId; i++) {
        if (!compareString(arrVer1[i], arrVer2[i])) {
            if (+formatStr(arrVer1[i]) > +formatStr(arrVer2[i])) {
                return 1;
            } else return -1;
        }
    }

    for (let i = minId; i < maxId; i++) {
        if (formatStr(maxVer.ver[i])) {
            if (maxVer.verName === 1) return 1;
            return -1;
        }
    }

    return 0;
}

console.log(compareVersion('1.1', '1.10'));
