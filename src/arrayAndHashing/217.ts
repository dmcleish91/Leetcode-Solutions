// Time Complexity: O(n)
// - 'n' is the number of elements in the input array.
// - The loop iterates through each element once, and set operations take constant time.
// - Therefore, the time complexity is linear, proportional to the number of elements.

// Space Complexity: O(n)
// - In the worst case, if all elements are unique, the set could store all 'n' elements.
// - Thus, the space used by the set is proportional to the number of elements in the input array.
function containsDuplicate(nums: number[]): boolean {
  // Create an empty set to store unique numbers encountered.
  const dataSet = new Set();

  // Iterate through each number in the input array.
  for (let index = 0; index < nums.length; index++) {
    // Add the current number to the set. Sets automatically keep only unique values.
    dataSet.add(nums[index]);
  }

  // If there are more unique elements than the total number of elements, then there are duplicates.
  return nums.length !== dataSet.size;
}

const test217 = [1, 2, 3, 4];

console.log(containsDuplicate(test217));
