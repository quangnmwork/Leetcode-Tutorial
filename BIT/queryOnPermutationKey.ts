export class FenwickTree {
    public BITTree: number[];

    constructor(size: number) {
        this.BITTree = new Array(size + 1).fill(0);
    }

    getSum(index: number) {
        let sum = 0;

        index = index + 1;

        while (index) {
            sum += this.BITTree[index];
            index -= index & -index;
        }

        return sum;
    }

    updateBIT(n, index, val) {
        index = index + 1;
        while (index <= n) {
            this.BITTree[index] += val;

            index += index & -index;
        }
    }
}

function processQueries(queries: number[], m: number) {
    const n = queries.length;
    const size = n + m;
    let res = [];

    const fenwickTree = new FenwickTree(size + 1);

    const indexMap = new Map();

    for (let i = 1; i <= m; i++) {
        indexMap.set(i, n + i);
        fenwickTree.updateBIT(size, n + i, 1);
    }

    for (let i = 0; i < queries.length; i++) {
        const num = queries[i];
        const idx = indexMap.get(num) - 1;

        const leftSum = fenwickTree.getSum(idx);

        res.push(leftSum);

        fenwickTree.updateBIT(size, idx, -1);
        fenwickTree.updateBIT(size, n - i, 1);

        indexMap.set(num, n - i);
    }

    return res;
}

processQueries([3, 1, 2, 1], 5);
processQueries([4, 1, 2, 2], 4); // 1 2 3 4
