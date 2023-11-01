function searchMatrix(matrix: number[][], target: number) {
  let left = 0;
  let right = matrix.length - 1;

  while (left <= right) {
    let row = Math.trunc((left + right) / 2);

    if (matrix[row][matrix[row].length - 1] > target && matrix[row][0] < target) {
      break;
    }

    if (matrix[row][matrix[row].length - 1] > target) {
      right = row - 1;
    } else if (matrix[row][0] < target) {
      left = row + 1;
    } else {
      break;
    }
  }

  const row = Math.trunc((left + right) / 2);
  left = 0;
  right = matrix[row].length - 1;

  while (left <= right) {
    let middle = Math.trunc((left + right) / 2);
    if (matrix[row][middle] === target) {
      return true;
    }

    if (matrix[row][middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
