function max(a, b, c) {
    return Math.max(Math.max(a, b), c);
}

// Find the maximum possible sum in arr[] auch that arr[m]
// is part of it
function maxCrossingSum(arr, l, m, h) {
    // Include elements on left of mid.
    let sum = 0;
    let left_sum = Number.MIN_VALUE;
    for (let i = m; i >= l; i--) {
        sum = sum + arr[i];
        if (sum > left_sum) left_sum = sum;
    }

    // Include elements on right of mid
    sum = 0;
    let right_sum = Number.MIN_VALUE;
    for (let i = m; i <= h; i++) {
        sum = sum + arr[i];
        if (sum > right_sum) right_sum = sum;
    }

    // Return sum of elements on left and right of mid
    // returning only left_sum + right_sum will fail for
    // [-2, 1]
    return max(left_sum + right_sum - arr[m], left_sum, right_sum);
}

// Returns sum of maximum sum subarray in aa[l..h]
function maxSubArraySum(arr, l, h) {
    //Invalid Range: low is greater than high
    if (l > h) return Number.MIN_VALUE;

    // Base Case: Only one element
    if (l == h) return arr[l];

    // Find middle point
    let m = parseInt((l + h) / 2, 10);

    /* Return maximum of following three possible cases
            a) Maximum subarray sum in left half
            b) Maximum subarray sum in right half
            c) Maximum subarray sum such that the subarray
    crosses the midpoint */
    return max(
        maxSubArraySum(arr, l, m - 1),
        maxSubArraySum(arr, m + 1, h),
        maxCrossingSum(arr, l, m, h)
    );
}

let arr = [-2, -3, -1];
let n = arr.length;
let max_sum = maxSubArraySum(arr, 0, n - 1);

console.log(max_sum);
