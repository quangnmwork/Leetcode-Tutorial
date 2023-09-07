export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function dfs(root: TreeNode | null) {
    if (!root) return;
    const leftTail = dfs(root.left);
    const rightTail = dfs(root.right);

    if (root.left) {
        leftTail.right = root.right;
        root.right = root.left;
        root.left = null;
    }
    return rightTail || leftTail || root;
}

function flatten(root: TreeNode | null): void {
    dfs(root);
}

const treeNode2 = new TreeNode(2);
const treeNode3 = new TreeNode(3);
const treeNode1 = new TreeNode(1, treeNode2, treeNode3);

flatten(treeNode1);
