// Time Complexity: O(2^n) it may consider all possible combinations, which is exponential.
// Space Complexity: O(2^n) The result array can also have exponential combinations
function combinationSum2(candidates: number[], target: number): number[][] {
  // Sort the candidates to ensure ascending order
  candidates.sort();

  // Initialize the result array to store combinations
  let result: number[][] = [];

  // Initialize the current array to track the current combination being formed
  let current: number[] = [];

  // Define a recursive backtrack function to explore combinations
  function backtrack(position: number, target: number) {
    // If the target becomes zero, a valid combination is found
    if (target === 0) {
      // Add a copy of the current combination to the result array
      result.push(current.slice());
    }

    // If the target becomes negative or zero, stop exploring this path
    if (target <= 0) {
      return;
    }

    // Initialize 'prev' to keep track of the previously used element
    let prev = -1;

    // Iterate through candidates starting from the given position
    for (let i = position; i < candidates.length; i++) {
      // Skip duplicates to avoid duplicate combinations
      if (candidates[i] === prev) {
        continue;
      }

      // Add the current candidate to the combination
      current.push(candidates[i]);

      // Recursively call the backtrack function with updated position and target
      backtrack(i + 1, target - candidates[i]);

      // Remove the last element to backtrack and explore other combinations
      current.pop();

      // Update 'prev' with the current candidate to handle duplicates
      prev = candidates[i];
    }
  }

  // Start the backtracking process from the beginning
  backtrack(0, target);

  // Return the final result containing all valid combinations
  return result;
}
