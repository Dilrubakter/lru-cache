const Cache = require("./LRUCache.js");

let cache = new Cache(2);

console.log("put A,10:", cache.put("A", 10));
console.log("put B,20:", cache.put("B", 20));
console.log("get A:", cache.get("A"));
console.log("put C,30:", cache.put("C", 30));
console.log("get B:", cache.get("B"));
console.log("get C:", cache.get("C"));
console.log("get A:", cache.get("A"));
