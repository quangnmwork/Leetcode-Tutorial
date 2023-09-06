class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const dfs = (
    root: TreeNode | null,
    targetSum: number,
    res: any = [],
    curRes = [],
    curSum: number
) => {
    if (curSum === targetSum) {
        if (!root.right && !root.left) res.push(curRes);
    }

    if (root.right != null)
        dfs(
            root.right,
            targetSum,
            res,
            [...curRes, root.right.val],
            curSum + root.right.val
        );

    if (root.left != null)
        dfs(
            root.left,
            targetSum,
            res,
            [...curRes, root.left.val],
            curSum + root.left.val
        );
};

function pathSum(root: TreeNode | null, targetSum: number) {
    const res: number[][] = [];

    dfs(root, targetSum, res, [root.val], root.val);
    console.log(res);
}

const treeNode2 = new TreeNode(-3);
const treeNode1 = new TreeNode(-2, treeNode2);

pathSum(treeNode1, -5);
