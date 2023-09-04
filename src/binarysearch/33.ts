// If the target is not the middle then you must determine
// what side of the array you are in then you must check if
// the target could be found in that section
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[left] <= nums[middle]) {
      if (target > nums[middle] || target < nums[left]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else {
      if (target < nums[middle] || target > nums[right]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 1));
