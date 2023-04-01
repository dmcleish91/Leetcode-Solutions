const nums = [1, 1, 1, 2, 2, 3];
const target = 2;

function topKFrequent(nums: number[], k: number) {
  const hash: { [key: number]: number } = {};
  const freq: number[][] = Array.apply(null, Array(nums.length + 1)).map(() => []);

  nums.forEach((item) => {
    if (hash[item]) {
      hash[item]++;
    } else {
      hash[item] = 1;
    }
  });

  Object.keys(hash).map((item) => {
    const key = Number(item);
    const value = hash[key];
    freq[value].push(key);
  });

  const result: number[] = [];

  for (let i = freq.length - 1; i >= 0; i--) {
    const element = freq[i];
    for (let j = 0; j < element.length; j++) {
      const answer = element[j];
      result.push(Number(answer));
      if (result.length === k) {
        return result;
      }
    }
  }
}

console.log(topKFrequent(nums, target));
