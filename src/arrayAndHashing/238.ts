/**
 * Calculates the product of all elements in the input array except for the current element.
 *
 * Time Complexity: O(N) - Linear time complexity, where N is the number of elements in the input array.
 *   The algorithm iterates through the input array twice, once from left to right and once from right to left.
 *   Each iteration takes O(N) time.
 *
 * Space Complexity: O(N) - Linear space complexity, where N is the number of elements in the input array.
 *   The algorithm uses an additional array of the same length as the input array to store the results.
 *   Therefore, the space required is directly proportional to the size of the input array.
 */
function productExceptSelf(nums: number[]) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  // Calculate products of all elements to the left of each index
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] *= leftProduct;
    leftProduct *= nums[i];
  }

  // Calculate products of all elements to the right of each index
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));

/*
 * https://www.youtube.com/watch?v=bNvIQI2wAjk
 * Array:       |    a    |    b    |    c    |    d       |
 * Prefix: ->   |    a    |   a*b   | a*b*c   | a*b*c*d    |
 * Postfix: <-  | a*b*c*d | b*c*d   |   c*d   |     d      |
 * Result:      |  b*c*d  |  a*c*d  |  a*b*d  |  a*b*c     |
 */
