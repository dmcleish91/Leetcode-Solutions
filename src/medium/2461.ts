const arr = [1, 5, 4, 2, 9, 9, 9];
const k = 3;

const findMaxSum = (nums: number[], k: number): number => {
  const frequencyArray: number[] = new Array(Math.max(...nums) + 1).fill(0);
  let distinctValues = 0;
  const arrayLength = nums.length;
  let leftPointer = 0;
  let rightPointer = k - 1;
  let sum = 0;

  for (let index = leftPointer; index <= rightPointer; index++) {
    frequencyArray[nums[index]]++;
    if (frequencyArray[nums[index]] === 1) distinctValues++;
    sum += nums[index];
  }

  let result = 0;

  for (let index = rightPointer; index < arrayLength; index++) {
    console.log(distinctValues, k);
    if (distinctValues === k) result = Math.max(result, sum);

    sum -= nums[leftPointer];
    frequencyArray[nums[leftPointer]]--;
    if (frequencyArray[nums[leftPointer]] === 0) distinctValues--;
    leftPointer++;

    rightPointer++;
    if (rightPointer === arrayLength) continue;

    sum += nums[rightPointer];
    frequencyArray[nums[rightPointer]]++;
    if (frequencyArray[nums[rightPointer]] === 1) distinctValues++;
  }

  return result;
};

console.log(findMaxSum(arr, k));
