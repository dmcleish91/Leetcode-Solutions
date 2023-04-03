function twoSum(numbers: number[], target: number): number[] {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer !== rightPointer) {
    if (numbers[leftPointer] + numbers[rightPointer] > target) {
      rightPointer--;
    }

    if (numbers[leftPointer] + numbers[rightPointer] < target) {
      leftPointer++;
    }

    if (numbers[leftPointer] + numbers[rightPointer] === target) {
      return [leftPointer + 1, rightPointer + 1];
    }
  }

  return [];
}

const otherNums = [1, 3, 4, 5, 7, 10, 11];
const otherTarget = 9;

console.log(twoSum(otherNums, otherTarget));
