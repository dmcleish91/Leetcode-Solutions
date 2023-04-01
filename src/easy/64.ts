function mySqrt(x: number): number {
  let leftPointer = 0;
  let rightPointer = x;
  let answer = 0;

  while (leftPointer <= rightPointer) {
    if (leftPointer * leftPointer <= rightPointer) {
      answer = leftPointer;
    }
    leftPointer++;
  }

  return answer;
}

console.log(mySqrtBinarySearch(8));

function mySqrtBinarySearch(x: number): number {
  let leftPointer = 0;
  let rightPointer = x;
  let answer = 0;
  let mid = 0;

  while (leftPointer <= rightPointer) {
    mid = Math.floor((leftPointer + rightPointer) / 2);
    if (mid * mid <= x) {
      answer = mid;
      leftPointer = mid + 1;
    } else {
      rightPointer = mid - 1;
    }
  }

  return answer;
}
