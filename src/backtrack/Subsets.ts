function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const subset = [];

  function dfs(i: number) {
    if (i >= nums.length) {
      result.push(subset.slice());
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1);

    subset.pop();
    dfs(i + 1);
  }

  dfs(0);
  return result;
}
// The solution of this problem is easy to visualize
// if you think of all the choices you can do then branch out from there
// this is how you create the dfs function. You can always add an element
// or chose not to include it. If the index is greater than the length
// of the input array you have arrived at a possible solution to include
// in the result array
