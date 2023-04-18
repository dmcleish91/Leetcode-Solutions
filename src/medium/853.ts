function carFleet(target: number, position: number[], speed: number[]): number {
  const combined = position
    .map((item, index) => {
      return [item, speed[index]];
    })
    .sort((a, b) => a[0] - b[0]);
}

const xtarget = 12;
const position = [10, 8, 0, 5, 3];
const speed = [2, 4, 1, 1, 3];

carFleet(xtarget, position, speed);
