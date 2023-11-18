// This function returns all possible subsets of the given array 'nums' with duplicate elements.
function subsetsWithDup(nums: number[]): number[][] {
  // The result array to store all subsets.
  const result: number[][] = [];

  // The current subset being constructed during the backtracking process.
  const subset = [];

  // Sort the input array to handle duplicate elements efficiently.
  nums.sort();

  // Backtracking function to generate subsets.
  function backtrack(i: number) {
    // If we have processed all elements in 'nums', add the current subset to the result.
    if (i === nums.length) {
      result.push(subset.slice());
      return;
    }

    // Include the current element in the subset and move to the next element.
    subset.push(nums[i]);
    backtrack(i + 1);

    // Exclude the current element from the subset and skip duplicates.
    subset.pop();
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }

    // Move to the next unique element in 'nums'.
    backtrack(i + 1);
  }

  // Start the backtracking process with the first element in 'nums'.
  backtrack(0);

  // Return the final result containing all subsets.
  return result;
}
