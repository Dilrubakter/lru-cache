# LRU Cache

A simple Least Recently Used (LRU) Cache implementation in JavaScript, supporting O(1) average time complexity for both `get` and `put` operations.

## Data Structures Used

This implementation uses a single JavaScript `Map` (`this.cache`) to store key-value pairs.

**Why a `Map`?**

- `Map` provides O(1) average time complexity for `.get()`, `.set()`, `.has()`, and `.delete()` — the same guarantees a plain object gives, but with one extra advantage that matters here:
- `Map` **preserves insertion order**. This means we don't need a separate data structure (like a manually built doubly-linked list, which is the more traditional/textbook LRU Cache approach) to track which key was used least recently — the `Map`'s own ordering does that job for us.

This avoids the added complexity of maintaining a linked list alongside a hash map, while still meeting the O(1) time requirement.

## How LRU Ordering Is Maintained

Every time a key is accessed (`get`) or updated (`put` on an existing key), it is:

1. Deleted from the `Map`
2. Immediately re-inserted

Because `Map` preserves insertion order, this delete-then-reinsert moves that key to the **end** of the map's iteration order — marking it as the most recently used.

As a result, the key sitting at the **front** of the map (the first one in iteration order) is always the one that has gone the longest without being touched — the least recently used. When the cache exceeds capacity, this front key is the one evicted.

## Time Complexity

- `get(key)`: O(1) average
- `put(key, value)`: O(1) average

This holds because every operation used (`has`, `get`, `set`, `delete`, and getting the first key via `.keys().next().value`) runs in O(1) average time on a `Map`.

## Space Complexity

- O(n), where `n` is the cache's capacity (`hold`).
- The `Map` never stores more than `hold` entries at once — every `put` that pushes the size over capacity immediately triggers an eviction, keeping total storage bounded by the capacity rather than growing with the total number of operations performed.

## Usage

\`\`\`javascript
const Cache = require("./LRUCache.js");

let cache = new Cache(2);

cache.put("A", 10);
cache.put("B", 20);
cache.get("A"); // 10 (A is now most recently used)
cache.put("C", 30); // evicts B (least recently used)
cache.get("B"); // -1 (B was evicted)
cache.get("C"); // 30
cache.get("A"); // 10
\`\`\`

## How to Run

\`\`\`
node test.js
\`\`\`

This runs the example test cases in `test.js` and logs the results to the console.

## Files

- `LRUCache.js` — the `Cache` class implementation
- `test.js` — example usage / test cases
- `README.md` — this file
