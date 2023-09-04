function minEatingSpeed(piles: number[], h: number): number {
  let leftPointer = 1;
  let rightPointer = Math.max(...piles);
  let answer = rightPointer;

  while (leftPointer <= rightPointer) {
    const k = Math.floor((leftPointer + rightPointer) / 2);
    let hours = 0;

    piles.forEach((pile) => {
      hours += Math.ceil(pile / k);
    });

    if (hours <= h) {
      answer = Math.min(k, answer);
      rightPointer = k - 1;
    } else {
      leftPointer = k + 1;
    }
  }

  return answer;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
