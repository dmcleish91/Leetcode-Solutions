function trap(height: number[]): number {
  if (height.length === 0) return 0;

  let result = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let leftMax = height[leftPointer];
  let rightMax = height[rightPointer];

  while (leftPointer < rightPointer) {
    if (leftMax < rightMax) {
      leftPointer++;
      leftMax = Math.max(leftMax, height[leftPointer]);
      result += leftMax - height[leftPointer];
    } else {
      rightPointer--;
      rightMax = Math.max(rightMax, height[rightPointer]);
      result += rightMax - height[rightPointer];
    }
  }

  return result;
}
