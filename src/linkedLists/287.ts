function findDuplicateSanity(nums: number[]): number {
  const numSet = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (numSet.has(element)) {
      return element;
    }
    numSet.add(element);
  }
  return -1;
}

function findDuplicate(nums: number[]): number {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      break;
    }
  }

  let slow2 = 0;
  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];
    if (slow === slow2) {
      return slow;
    }
  }
}
