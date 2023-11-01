// Time Complexity: O(log n)
// Explanation: This is a binary search algorithm, which repeatedly divides the search interval in half.
// The time complexity is logarithmic because the search space is halved in each iteration.
// It is efficient for sorted arrays.

// Space Complexity: O(1)
// Explanation: The function uses a constant amount of extra space for variables like lowerBoundary, upperBoundary, and middle.
function search(nums: number[], target: number): number {
  let lowerBoundary = 0;
  let upperBoundary = nums.length - 1;
  let middle = 0;

  while (lowerBoundary <= upperBoundary) {
    middle = Math.trunc((lowerBoundary + upperBoundary) / 2);

    if (target === nums[middle]) return middle;

    if (target > nums[middle]) {
      lowerBoundary = middle + 1;
    } else {
      upperBoundary = middle - 1;
    }
  }

  return -1;
}

const numsZ = [-1, 0, 3, 5, 9, 12];

console.log(search(numsZ, 9));
