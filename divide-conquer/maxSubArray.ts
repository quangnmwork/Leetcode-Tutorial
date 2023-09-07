function maxSubArraySum(arr, n) {
    // Base case: when there is only one element in the array
    if (n === 1) {
        return arr[0];
    }
    // Recursive case: divide the problem into smaller sub-problems
    const m = Math.floor(n / 2);
    // Find the maximum subarray sum in the left half
    const leftMax = maxSubArraySum(arr.slice(0, m), m);
    // Find the maximum subarray sum in the right half
    const rightMax = maxSubArraySum(arr.slice(m), n - m);
    // Find the maximum subarray sum that crosses the middle element
    let leftSum = -Infinity,
        rightSum = -Infinity,
        sum = 0;
    for (let i = m; i < n; i++) {
        sum += arr[i];
        rightSum = Math.max(rightSum, sum);
    }
    sum = 0;
    for (let i = m - 1; i >= 0; i--) {
        sum += arr[i];
        leftSum = Math.max(leftSum, sum);
    }
    const crossMax = leftSum + rightSum;
    // Return the maximum of the three subarray sums
    return Math.max(crossMax, leftMax, rightMax);
}
function maxSubArray(nums: number[]) {
    return maxSubArraySum(nums, nums.length);
}
