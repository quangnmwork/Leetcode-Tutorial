function twoSum(numbers: number[], target: number) {
    let i = 0,
        j = numbers.length - 1;

    while (i < j) {
        if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
        else if (numbers[i] + numbers[j] < target) i++;
        else j--;
    }
}

console.log(twoSum([2, 3, 4], 6));
