// Time Complexity: O(2^n) it may consider all possible combinations, which is exponential.
// Space Complexity: O(2^n) The result array can also have exponential combinations
function combinationSum(candidates: number[], target: number): number[][] {
  let result: number[][] = [];
  let current: number[] = [];

  function dfs(i: number, total: number) {
    if (total == target) {
      result.push(current.slice());
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    current.push(candidates[i]);
    dfs(i, total + candidates[i]);

    current.pop();
    dfs(i + 1, total);
  }
  dfs(0, 0);

  return result;
}

// 2 3 6 7
// 7

// 2 (2)
// 2 2 (4)
// 2 2 2 (6)
// 2 2 2 2 (8)
// 2 2 2 3 (9)
// 2 2 3 (7)
