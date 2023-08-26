// This problem implement by Boyer moore voting Algorithm

function boyerMooreVoting(nums: number[]) {
    let cnt = 0,
        candidate = -1;

    for (let i = 0; i < nums.length; i++) {
        if (!cnt) {
            candidate = nums[i];
            cnt = 1;
        } else {
            if (nums[i] === candidate) cnt++;
            else cnt--;
        }
    }

    cnt = 0;

    nums.forEach((num) => {
        if (num === candidate) cnt++;
    });

    return cnt > Math.floor(nums.length / 3) ? candidate : -1;
}

function majorityElement(nums: number[]) {
    let candidate1 = { val: undefined, cnt: 0 } as {
        val?: number;
        cnt: number;
    };
    let candidate2 = { val: undefined, cnt: 0 } as {
        val?: number;
        cnt: number;
    };

    nums.forEach((num) => {
        if (num === candidate1.val) {
            candidate1.cnt = candidate1.cnt + 1;
        } else if (num === candidate2.val) {
            candidate2.cnt = candidate2.cnt + 1;
        } else if (candidate1.cnt === 0) {
            candidate1.val = num;
            candidate1.cnt = 1;
        } else if (candidate2.cnt === 0) {
            candidate2.val = num;
            candidate2.cnt = 1;
        } else {
            candidate1.cnt = candidate1.cnt - 1;
            candidate2.cnt = candidate2.cnt - 1;
        }
    });

    let cnt1 = 0,
        cnt2 = 0;

    nums.forEach((num) => {
        if (candidate1.val === num) cnt1++;
        if (candidate2.val === num) cnt2++;
    });
    const res = [];
    if (cnt1 > Math.floor(nums.length / 3)) res.push(candidate1.val);
    if (cnt2 > Math.floor(nums.length / 3)) res.push(candidate2.val);

    return res;
}

console.log(majorityElement([2, 2]));
