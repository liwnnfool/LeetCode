// I don't know how to solve this question
// This is the answer in Discuss

var exist = function(board, word) {
  const location = [[-1, 0], [0, -1], [1, 0], [0, 1]]
  const find = (idx, x, y) => {
    if (idx === word.length) return true
    if (!board[x] || word[idx] !== board[x][y]) return false

    board[x][y] = '#'

    for (let [a, b] of location) {
      if (find(idx + 1, x + a, y + b))
        return true
    }

    board[x][y] = word[idx]

    return false
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (find(0, i, j))
        return true
    }
  }

  return false
};
