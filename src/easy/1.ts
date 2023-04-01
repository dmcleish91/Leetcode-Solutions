function twoSum(nums: number[], target: number): number[] {
  const answerMap = new Map<number, number>();
  let compliment: number = 0;

  for (let index = 0; index < nums.length; index++) {
    compliment = target - nums[index];

    if (answerMap.has(compliment)) {
      return [answerMap.get(compliment)!, index];
    }
    answerMap.set(nums[index], index);
  }

  return [];
}
