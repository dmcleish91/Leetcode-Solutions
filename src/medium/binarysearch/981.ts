class TimeMap {
  public timemap: Map<string, Array<[string, number]>>;
  constructor() {
    this.timemap = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.timemap.has(key)) {
      this.timemap.set(key, new Array());
    }
    this.timemap.get(key)?.push([value, timestamp]);
  }

  get(key: string, timestamp: number): string {
    const values = this.timemap.get(key)!;
    let result = "";

    let left = 0;
    let right = values?.length - 1;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (values[middle][1] <= timestamp) {
        result = values[middle][0];
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return result;
  }
}

const testMap = new TimeMap();
testMap.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1.
console.log(testMap.get("foo", 1)); // return "bar"
console.log(testMap.get("foo", 3)); // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
testMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
console.log(testMap.get("foo", 4)); // return "bar2"
console.log(testMap.get("foo", 5)); // return "bar2"

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
