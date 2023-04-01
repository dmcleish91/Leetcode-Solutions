function climbStairs(n: number): number {
  let step = 1;
  let stepBefore = 1;

  for (let index = 0; index < n - 1; index++) {
    const temp = step;
    step = step + stepBefore;
    stepBefore = temp;
  }

  return step;
}

console.log(climbStairs(5));
