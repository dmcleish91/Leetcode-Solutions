// The binary search we perform is searching for slowest speed we can eat bananas
// so we have left at the least bph and right at the max bph (biggest pile in the input array)
// since we are searching for the min speed we init the answer to the max possible answer the right boundary
// Then its we calculate the midpoint as a potential speed
// we then calculate the how many hours it takes to eat all the bananas
// if our answer is less that the max hours we can be lazier
// but if its larger we have to try harder
function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);
  let answer = right;

  while (left <= right) {
    const k = Math.trunc((left + right) / 2);

    let hours = 0;

    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / k);
    }

    if (hours <= h) {
      answer = Math.min(k, answer);
      right = k - 1;
    } else {
      left = k + 1;
    }
  }
  return answer;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
