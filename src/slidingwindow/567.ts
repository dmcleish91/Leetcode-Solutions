function checkInclusion(s1: string, s2: string): boolean {
  const s1Map = new Map<string, number>();
  const window = new Map<string, number>();

  for (let i = 0; i < s1.length; i++) {
    const element = s1[i];
    if (!s1Map.has(element)) {
      s1Map.set(element, 1);
    } else {
      s1Map.set(element, s1Map.get(element)! + 1);
    }
  }

  let leftPointer = 0;
  for (let i = 0; i < s2.length; i++) {
    const element = s2[i];

    if (!window.has(element)) {
      window.set(element, 1);
    } else {
      window.set(element, window.get(element)! + 1);
    }

    if (i - leftPointer + 1 === s1.length) {
      if (compareTwoMaps(s1Map, window)) {
        return true;
      } else {
        window.set(s2[leftPointer], window.get(s2[leftPointer])! - 1);
        leftPointer++;
      }
    }
  }

  return false;
}

function compareTwoMaps(first: Map<string, number>, second: Map<string, number>) {
  for (const key of first.keys()) {
    if (second.get(key) !== first.get(key)) {
      return false;
    }
  }

  return true;
}

console.log(checkInclusion("adc", "dcda"));
