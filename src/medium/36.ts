function isValidSudoku(board: string[][]): boolean {
  const columns = new Map<number, Set<string>>();
  const rows = new Map<number, Set<string>>();
  const squares = new Map<string, Set<string>>();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;

      const grid = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;

      if (!columns.has(j)) columns.set(j, new Set());
      if (!rows.has(i)) rows.set(i, new Set());
      if (!squares.has(grid)) squares.set(grid, new Set());

      if (columns.get(j)?.has(board[i][j]) || rows.get(i)?.has(board[i][j]) || squares.get(grid)?.has(board[i][j])) return false;

      columns.get(j)?.add(board[i][j]);
      rows.get(i)?.add(board[i][j]);
      squares.get(grid)?.add(board[i][j]);
    }
  }

  return true;
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
