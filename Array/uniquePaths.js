// Discuss
var uniquePaths = function (m, n) {
  // init a 2D array
  const grid = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) grid[i][j] = 1;
      else grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }

  return grid[m - 1][n - 1];
};

// simplifying the creation of array
var uniquePaths = function (m, n) {
  // init a 2D array
  //  const grid = Array.from({ length: m }, (v, i) => {
  //    console.log(v, i);
  //    return [1];
  //  });
  const grid = Array.from({ length: m }, () => [1]);
  grid[0] = Array(n).fill(1);

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }

  return grid[m - 1][n - 1];
};
