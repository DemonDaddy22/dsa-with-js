/*
  Problem - Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

  The class has three public methods:

  set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds.
  Once the duration has elapsed, the key should be inaccessible.
  The method should return true if the same un-expired key already exists and false otherwise.
  Both the value and duration should be overwritten if the key already exists.

  get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

  count(): returns the count of un-expired keys.
*/

class TimeLimitedCache {
  cache;
  timeouts;

  constructor() {
    this.cache = {};
    this.timeouts = {};
  }

  #setter = (key, value, duration) => {
    this.cache[key] = value;
    this.timeouts[key] = setTimeout(() => {
      delete this.cache[key];
      delete this.timeouts[key];
    }, duration);
  };

  set = (key, value, duration) => {
    if (key in this.cache) {
      clearTimeout(this.timeouts[key]);
      delete this.timeouts[key];
      this.#setter(key, value, duration);
      return true;
    }
    this.#setter(key, value, duration);
    return false;
  };

  get = (key) => {
    return this.cache[key] ?? -1;
  };

  count = () => {
    return Object.keys(this.cache).length;
  };
}

/*
const tlCache = new TimeLimitedCache();

console.log(tlCache.count());
console.log(tlCache.set('hello', 'world', 5000));
console.log(tlCache.count());
console.log(tlCache.get('hello'));
console.log(tlCache.get('hi'));
setTimeout(() => console.log(tlCache.get('hello')), 6000);
*/
