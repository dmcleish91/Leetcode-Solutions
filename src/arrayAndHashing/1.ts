// Time Complexity: O(n)
// - 'n' is the number of elements in the input array.
// - The loop iterates through each element once, and set operations take constant time.
// - Therefore, the time complexity is linear, proportional to the number of elements.

// Space Complexity: O(n)
// - In the worst case, if all elements are unique, the map could store all 'n' elements.
// - Thus, the space used by the map is proportional to the number of elements in the input array.
function twoSumEasy(nums: number[], target: number): number[] {
  // Create a map to store numbers and their corresponding indices.
  const answerMap = new Map<number, number>();

  // Initialize a variable to hold the complementary value.
  let compliment: number = 0;

  // Iterate through the 'nums' array.
  for (let index = 0; index < nums.length; index++) {
    // Calculate the complementary value needed to reach the 'target'.
    compliment = target - nums[index];

    // Check if the complementary value exists in the 'answerMap'.
    if (answerMap.has(compliment)) {
      // If found, return the indices of the current number and the complementary number.
      return [answerMap.get(compliment)!, index];
    }

    // If not found, store the current number and its index in the 'answerMap'.
    answerMap.set(nums[index], index);
  }

  // If no solution is found, return an empty array.
  return [];
}
