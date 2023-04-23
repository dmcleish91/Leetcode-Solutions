function search(nums: number[], target: number): number {
  let lowerBoundary = 0;
  let upperBoundary = nums.length - 1;
  let middle = 0;

  while (lowerBoundary <= upperBoundary) {
    middle = Math.trunc((lowerBoundary + upperBoundary) / 2);

    if (target === nums[middle]) return middle;

    if (nums[middle] > target) {
      upperBoundary = middle - 1;
    } else {
      lowerBoundary = middle + 1;
    }
  }

  return -1;
}

const numsZ = [-1, 0, 3, 5, 9, 12];

console.log(search(numsZ, 9));
