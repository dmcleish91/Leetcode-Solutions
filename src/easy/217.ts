// function containsDuplicate(nums: number[]): boolean {
//   const sortedArray = nums.sort();

//   for (let index = 0; index < nums.length - 1; index++) {
//     if (sortedArray[index] === sortedArray[index + 1]) {
//       return true;
//     }
//   }

//   return false;
// }

const testCase = [1, 2, 3, 4];

function containsDuplicate(nums: number[]): boolean {
  const dataSet = new Set();

  for (let index = 0; index < nums.length; index++) {
    dataSet.add(nums[index]);
  }

  console.log(nums.length);
  console.log(dataSet.size);

  return nums.length !== dataSet.size;
}

console.log(containsDuplicate(testCase));
