/**
 * Solution 1: Using Linear Search
 *
 * This solution finds the integer square root of a given number 'x' using a linear search approach.
 * It iterates from 0 to 'x' and at each step, checks whether the square of the current value of 'leftPointer'
 * is less than or equal to the target 'x'. If it is, the current value of 'leftPointer' is a potential
 * candidate for the square root, and the 'answer' is updated accordingly. This continues until 'leftPointer'
 * exceeds the value of 'x'.
 *
 * Time Complexity: O(sqrt(x)), where x is the input number. The loop iterates at most x times.
 * Space Complexity: O(1), using only a constant amount of extra space.
 */
function mySqrt(x: number): number {
  let leftPointer = 0;
  let target = x;
  let answer = 0;

  while (leftPointer <= target) {
    if (leftPointer * leftPointer <= target) {
      answer = leftPointer;
    }
    leftPointer++;
  }

  return answer;
}

/**
 * Solution 2: Using Binary Search
 *
 * This solution finds the integer square root of a given number 'x' using a binary search approach.
 * It initializes 'leftPointer' to 0 and 'rightPointer' to 'x'. In each iteration of the while loop,
 * it calculates the 'mid' point between 'leftPointer' and 'rightPointer', and checks whether the square
 * of 'mid' is less than or equal to 'x'. If it is, the 'mid' value is a potential candidate for the square
 * root, and 'leftPointer' is adjusted to continue searching in the upper half. If the square of 'mid' is
 * greater than 'x', 'rightPointer' is adjusted to search in the lower half.
 *
 * Time Complexity: O(log(x)), where x is the input number. Binary search reduces the search space by half in each iteration.
 * Space Complexity: O(1), using only a constant amount of extra space.
 */
function mySqrtBinarySearch(x: number): number {
  let leftPointer = 0;
  let rightPointer = x;
  let answer = 0;
  let mid = 0;

  while (leftPointer <= rightPointer) {
    mid = Math.floor((leftPointer + rightPointer) / 2);
    if (mid * mid <= x) {
      answer = mid;
      leftPointer = mid + 1;
    } else {
      rightPointer = mid - 1;
    }
  }

  return answer;
}

console.log(mySqrt(7));
