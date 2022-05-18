function numIslands(grid: string[][]): number {
  let cntIslands = 0;
  const dfs = (grid: string[][], x: number, y: number) => {
    if (
      x == grid.length ||
      y == grid[0].length ||
      x < 0 ||
      y < 0 ||
      grid[x][y] == "0"
    ) {
      return;
    }
    grid[x][y] = "0";
    dfs(grid, x + 1, y);
    dfs(grid, x - 1, y);
    dfs(grid, x, y - 1);
    dfs(grid, x, 1 + y);
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "1") {
        cntIslands++;
        dfs(grid, i, j);
      }
    }
  }
  return cntIslands;
}

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(numIslands(grid));
