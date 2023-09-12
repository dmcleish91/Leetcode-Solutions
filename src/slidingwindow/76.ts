function minWindow(s: string, t: string): string {
  if (t.length === 0) return '';

  const tMap = new Map<string, number>();
  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    tMap.set(element, (tMap.get(element) ?? 0) + 1);
  }

  let leftPointer = 0;
  let satisfiesCondition = 0;
  let index = [0, 0];
  let minSize = Infinity;
  const window = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    window.set(element, (window.get(element) ?? 0) + 1);

    if (tMap.get(element) !== undefined && window.get(element) === tMap.get(element)) {
      satisfiesCondition++;
    }

    while (satisfiesCondition === tMap.size) {
      if (i - leftPointer + 1 < minSize) {
        index = [leftPointer, i];
        minSize = i - leftPointer + 1;
      }
      window.set(s[leftPointer], window.get(s[leftPointer])! - 1);
      if (tMap.has(s[leftPointer]) && window.get(s[leftPointer])! < tMap.get(s[leftPointer])!) {
        satisfiesCondition--;
      }
      if (window.get(s[leftPointer]) === 0) {
        window.delete(s[leftPointer]);
      }
      leftPointer++;
    }
  }

  return minSize !== Infinity ? s.substring(index[0], index[1] + 1) : '';
}

console.log(minWindow('ADOBECODEBANC', 'ABC'));
