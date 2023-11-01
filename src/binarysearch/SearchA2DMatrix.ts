function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  const columns = matrix[0].length;

  let top = 0;
  let bottom = rows - 1;

  while (top <= bottom) {
    const middleRow = Math.trunc((top + bottom) / 2);
    if (target > matrix[middleRow][matrix[0].length - 1]) {
      top = middleRow + 1;
    } else if (target < matrix[middleRow][0]) {
      bottom = middleRow - 1;
    } else {
      break;
    }
  }

  if (top > bottom) return false;

  let left = 0;
  let right = columns - 1;
  let answerRow = Math.trunc((top + bottom) / 2);

  while (left <= right) {
    const middle = Math.trunc((left + right) / 2);

    if (target > matrix[answerRow][middle]) {
      left = middle + 1;
    } else if (target < matrix[answerRow][middle]) {
      right = middle - 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(searchMatrix([[1], [3]], 1));
