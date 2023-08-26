function rotate(matrix: number[][]) {
    const matrixLen = matrix.length;
    const set = new Set();
    for (let i = 0; i < matrixLen; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    console.log(set);

    matrix.forEach((matrixItem) => matrixItem.reverse());
}
rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);
