const nums = [1];
const target = 1;

function topKFrequent(nums: number[], target: number) {
  // Step 1: Create a hash map to store the frequency of each element in the array.
  const hashMap = new Map<number, number>();

  // Step 2: Populate the hash map with the frequency of each element.
  for (let i = 0; i < nums.length; i++) {
    // Use the nullish coalescing operator to handle undefined values.
    hashMap.set(nums[i], (hashMap.get(nums[i]) ?? 0) + 1);
  }

  // Step 3: Create a frequency map (an array of arrays) to group elements by their frequencies.
  const freqMap: number[][] = new Array(nums.length);

  for (let i = 0; i <= nums.length; i++) {
    freqMap[i] = [];
  }

  // Step 4: Populate the frequency map with elements grouped by their frequencies.
  for (const [key, value] of hashMap) {
    freqMap[value].push(key);
  }

  // Step 5: Traverse the frequency map in reverse order to get the top K frequent elements.
  const result = [];

  for (let i = freqMap.length - 1; i >= 0; i--) {
    const element = freqMap[i];
    for (let j = 0; j < element.length; j++) {
      const answer = element[j];
      result.push(answer);
      // Step 6: Check if we have collected K elements, and if so, return the result.
      if (result.length == target) {
        return result;
      }
    }
  }
}

console.log(topKFrequent(nums, target));
