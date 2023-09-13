function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const queue: number[] = [];
  let leftPointer = 0;
  let rightPointer = 0;

  while (rightPointer < nums.length) {
    while (queue && nums[queue.at(-1)!] < nums[rightPointer]) {
      queue.pop();
    }

    queue.push(rightPointer);

    if (leftPointer > queue[0]) {
      queue.shift();
    }

    if (rightPointer + 1 >= k) {
      result.push(nums[queue[0]]);
      leftPointer++;
    }
    rightPointer++;
  }

  return result;
}

//unshift - insert at start
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
