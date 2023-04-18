function dailyTemperatures(temperatures: number[]): number[] {
  const solution: number[] = new Array(temperatures.length).fill(0);
  const stack: [number, number][] = [];

  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];

    while (stack.length !== 0 && temperature > stack[stack.length - 1][0]) {
      const tempPosition = stack.pop();
      if (tempPosition) {
        solution[tempPosition[1]] = i - tempPosition[1];
      }
    }

    stack.push([temperature, i]);
  }

  return solution;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(temperatures));
