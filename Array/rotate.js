var rotate = function(matrix) {
  const n = matrix.length

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i !== j)
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  
  return matrix.map(arr => arr.reverse())
};