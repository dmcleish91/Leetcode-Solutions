// time complexity: O(N! * N)
// space complexity: O(N)
function permute(nums: number[]): number[][] {
  let result: number[][] = [];

  function dfs(current: number[]) {
    if (current.length === nums.length) {
      result.push(current.slice());
      return;
    }

    for (const num of nums) {
      if (!current.includes(num)) {
        current.push(num);
        dfs(current);
        current.pop();
      }
    }
  }

  dfs([]);

  return result;
}
