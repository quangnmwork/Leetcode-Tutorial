function canJump(nums: number[]) {
    let currentJum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (!currentJum) return false;
        currentJum = Math.max(currentJum - 1, nums[i]);
    }

    return true;
}
