function longestConsecutive(nums: number[]): number {
  const answerSet = new Set(nums);
  let longest = 0;
  let length = 0;

  nums.forEach((number) => {
    if (!answerSet.has(number - 1)) {
      length = 0;
      while (answerSet.has(number + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  });

  return longest;
}
