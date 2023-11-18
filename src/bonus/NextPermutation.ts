function nextPermutation(nums: number[]): void {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }

  reverse(nums, i + 1);
}

function swap(nums: number[], a: number, b: number) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

function reverse(nums: number[], start: number) {
  let end = nums.length - 1;
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}
