class NumArray {
    private BITree: number[];
    private originSum: number[];

    constructor(nums: number[]) {
        this.BITree = new Array(nums.length + 1).fill(0);
        this.originSum = nums;
        this.initBinaryIndexTree([...nums]);
    }

    initBinaryIndexTree(nums: number[]) {
        const n = this.BITree.length;

        for (let i = 0; i <= this.BITree.length; i++) {
            let index = i;
            index = index + 1;
            while (index <= n) {
                this.BITree[index] += nums[i];
                index += index & -index;
            }
        }
    }

    update(index: number, val: number): void {
        index = index + 1;
        const n = this.BITree.length;

        const newVal = val - this.originSum[index - 1];

        while (index <= n) {
            this.BITree[index] += newVal;
            index += index & -index;
        }
    }

    sumRange(left: number, right: number) {
        const isFirst = left - 1 >= 0 ? true : false;

        return this.getSum(right) - (isFirst ? this.getSum(left - 1) : 0);
    }

    getSum(idx: number) {
        idx = idx + 1;

        let sum = 0;

        while (idx) {
            sum += this.BITree[idx];
            idx -= idx & -idx;
        }

        return sum;
    }
}

const BITree = new NumArray([1, 3, 5]);

console.log(BITree.sumRange(0, 2));
BITree.update(1, 2);
console.log(BITree.sumRange(0, 2));
