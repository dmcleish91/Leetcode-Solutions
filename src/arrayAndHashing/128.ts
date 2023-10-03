// This function finds the length of the longest consecutive sequence of numbers in an array.
// Time complexity is O(n)
function longestConsecutive(nums: number[]): number {
  // Create a Set to store the input numbers for efficient lookup.
  const answerSet = new Set(nums);
  // Initialize variables to keep track of the longest consecutive sequence and the current sequence length.
  let longest = 0;
  let length = 0;

  // Iterate through the array of numbers.
  nums.forEach((number) => {
    // Check if the current number is the start of a potential consecutive sequence.
    if (!answerSet.has(number - 1)) {
      // Reset the current sequence length to 0.
      length = 0;
      // Check how long the consecutive sequence can go by incrementing the number.
      while (answerSet.has(number + length)) {
        length++;
      }
      // Update the longest consecutive sequence if the current sequence is longer.
      longest = Math.max(length, longest);
    }
  });

  // Return the length of the longest consecutive sequence.
  return longest;
}

// store items in a set and check if the current item is the start of a set then see how long the set it