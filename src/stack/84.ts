function largestRectangleArea(heights: number[]): number {
  let largestArea = 0;
  let stack: [number, number][] = [];

  for (let i = 0; i < heights.length; i++) {
    // Initialize a variable to store the starting index of the current bar
    let start = i;

    // Check if the stack is not empty and the current height is smaller than the previous height
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const [lastI, lastH] = stack.pop();

      // Calculate the area of the rectangle formed by the popped bar
      largestArea = Math.max(largestArea, lastH * (i - lastI));

      // Update the starting index to the popped bar's index
      start = lastI;
    }

    // Push the current bar's index and height onto the stack
    stack.push([start, heights[i]]);
  }

  // Calculate the area for the remaining bars in the stack
  for (let j = 0; j < stack.length; j++) {
    let currArea = stack[j][1] * (heights.length - stack[j][0]);

    largestArea = Math.max(largestArea, currArea);
  }

  return largestArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
