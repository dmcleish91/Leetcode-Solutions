const s = 'anagram',
  t = 'nagaram';

function compareMaps(map1: Map<string, number>, map2: Map<string, number>): boolean {
  for (const [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }

  return true;
}

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  for (let index = 0; index < s.length; index++) {
    if (sMap.get(s.charAt(index)) === undefined) {
      sMap.set(s.charAt(index), 1);
    } else {
      sMap.set(s.charAt(index), sMap.get(s.charAt(index))! + 1);
    }
  }

  for (let index = 0; index < t.length; index++) {
    if (tMap.get(t.charAt(index)) === undefined) {
      tMap.set(t.charAt(index), 1);
    } else {
      tMap.set(t.charAt(index), tMap.get(t.charAt(index))! + 1);
    }
  }

  return compareMaps(sMap, tMap);
}

console.log(isAnagram(s, t));
