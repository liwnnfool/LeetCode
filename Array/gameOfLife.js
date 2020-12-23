var gameOfLife = function (board) {
  const rows = board.length,
    cols = board[0].length;
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let curCell = board[r][c],
        neighborsCount = 0;

      for (let [rCtrl, cCtrl] of direction) {
        let [nRow, nCol] = [r + rCtrl, c + cCtrl];

        if (nRow < 0 || nCol < 0 || nRow >= rows || nCol >= cols) continue;

        // alive
        if (board[nRow][nCol] === -1 || board[nRow][nCol] === 1)
          neighborsCount++;
      }

      // dead via over-population or under-population
      if (curCell === 1 && (neighborsCount > 3 || neighborsCount < 2))
        board[r][c] = -1;
      // live via reproduction
      else if (curCell === 0 && neighborsCount === 3) board[r][c] = 2;
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = board[r][c];
      if (cell === 2) board[r][c] = 1;
      if (cell === -1) board[r][c] = 0;
    }
  }
};
