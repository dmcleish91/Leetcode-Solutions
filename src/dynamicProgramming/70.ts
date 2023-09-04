// 0   1   2   3   4   5
// [8] [5] [3] [2] [1] [1]
// base case is one because not taking a step is a step in itself (1 way to climb 0 steps)
function climbStairsDynamicProgramming(n: number): number {
  let step = 1;
  let stepBefore = 1;

  for (let index = 0; index < n - 1; index++) {
    const temp = step;
    step = step + stepBefore;
    stepBefore = temp;
  }

  return step;
}

// Brute force solution
// Time complexity: O(2^n)
// Space complexity: O(n)
function climbStairsBruteForce(n: number): number {
  function generateCombinations(currentSum: number): number {
    if (currentSum === n) return 1;
    if (currentSum > n) return 0;
    return generateCombinations(currentSum + 1) + generateCombinations(currentSum + 2);
  }
  return generateCombinations(0);
}

console.log(climbStairsBruteForce(5));
console.log(climbStairsDynamicProgramming(5));
