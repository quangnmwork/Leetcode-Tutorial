class Solution {
  List<List<int>> initMatrix(int numRow, int numCol) {
    // Init full m x n matrix. the value for first col and first row will be 1
    return List.generate(
      numRow,
      (indexRow) => List.generate(
        numCol,
        (indexCol) {
          if (indexRow == 0 || indexCol == 0) return 1;
          return 0;
        },
      ),
    );
  }

  int uniquePaths(int m, int n) {
    var matrix = initMatrix(m, n);

    for (var i = 0; i < m; i++) {
      for (var j = 0; j < n; j++) {
        if (i > 0 && j > 0) matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
      }
    }

    return matrix[m - 1][n - 1];
  }
}

void main() {
  Solution sol = new Solution();

  print(sol.uniquePaths(3, 4));
}
