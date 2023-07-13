const prices = [7, 1, 5, 3, 6, 4];

// The sliding window approach allows us to track the lowest buying price
// and update the maximun profit whenever we encounter a higher selling price

// The time complexity is O(n) because the algorithm iterates over the prices
// array using a while loop that runs for n-1 iterations in the worst case.

// The space complexity is O(1) because the algorithm does not require any additional data
// structures that grow with the input size. It only uses a fixed number of variables to store
// the pointers, the maximum price, and temporary values, regardless of the size of the prices array.

function maxProfit(prices: number[]): number {
  // left pointer is buying and right pointer is selling
  let leftPointer = 0;
  let rightPointer = 1;
  let maxPrice = 0;

  while (rightPointer < prices.length) {
    // We can only get a profit if the left pointer is less than the right pointer
    if (prices[leftPointer] < prices[rightPointer]) {
      const profit = prices[rightPointer] - prices[leftPointer];
      maxPrice = Math.max(maxPrice, profit);
    } else {
      // If we find a new low. We move immediately to it
      leftPointer = rightPointer;
    }
    // We always increment the right pointer to search the array
    rightPointer++;
  }

  return maxPrice;
}

console.log(maxProfit(prices));
