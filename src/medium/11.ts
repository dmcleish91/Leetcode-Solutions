/*
To solve LeetCode 11 - Container With Most Water, we use a two-pointer approach. 
We start with pointers at both ends, calculate the area, and move the pointer 
pointing to the smaller height towards the other. This way, we maximize the area 
while iterating through the array just once, making it an O(n) solution.
*/
function maxArea(height: number[]): number {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let max = 0;

  while (leftPointer < rightPointer) {
    if (height[leftPointer] < height[rightPointer]) {
      max = Math.max(max, height[leftPointer] * (rightPointer - leftPointer));
      leftPointer++;
    } else {
      max = Math.max(max, height[rightPointer] * (rightPointer - leftPointer));
      rightPointer--;
    }
  }
  return max;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
