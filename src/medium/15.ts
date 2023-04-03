function threeSum(nums: number[]): number[][] {
  const answers: number[][] = [];
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    const target = sorted[i];
    if (i > 0 && target === sorted[i - 1]) continue;

    let leftPointer = i + 1;
    let rightPointer = sorted.length - 1;

    while (leftPointer < rightPointer) {
      const threeSumValue = target + sorted[leftPointer] + sorted[rightPointer];

      if (threeSumValue > 0) {
        rightPointer--;
      } else if (threeSumValue < 0) {
        leftPointer++;
      } else {
        answers.push([target, sorted[leftPointer], sorted[rightPointer]]);
        leftPointer++;
        while (sorted[leftPointer] === sorted[leftPointer - 1] && leftPointer < rightPointer) {
          leftPointer++;
        }
      }
    }
  }

  return answers;
}

const a = [-1, 0, 1, 2, -1, -4];
const b = [-2, -2, 0, 0, 2, 2];
// -4 -1 -1 0 1 2

console.log(threeSum(a));
