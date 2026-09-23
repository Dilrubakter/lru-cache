class Cache {
  constructor(hold) {
    this.hold = hold;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.hold) {
      let oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    return `set ${key}=${value}`;
  }
}
module.exports = Cache;
