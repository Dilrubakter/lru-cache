# LRU Cache

A simple Least Recently Used (LRU) Cache implementation in JavaScript, using a `Map` to track insertion order for O(1) average time complexity.

## Features

- `new Cache(hold)` — creates a cache with a fixed capacity (`hold`)
- `put(key, value)` — inserts or updates a key/value pair; evicts the least recently used entry if capacity is exceeded
- `get(key)` — returns the value for a key (and marks it as most recently used), or `-1` if the key doesn't exist

## How it works

Instead of a manual linked list, this implementation relies on JavaScript's `Map` object, which preserves insertion order. Whenever a key is accessed or updated, it's deleted and re-inserted — moving it to the "most recently used" end. This means the **first key** in the map's iteration order is always the **least recently used**, making eviction a simple, fast operation.

## Usage

\`\`\`javascript
const Cache = require("./LRUCache.js");

let cache = new Cache(2);

cache.put("A", 10);
cache.put("B", 20);
cache.get("A");        // 10 (A is now most recently used)
cache.put("C", 30);    // evicts B (least recently used)
cache.get("B");        // -1 (B was evicted)
cache.get("C");        // 30
cache.get("A");        // 10
\`\`\`

## Running tests

\`\`\`
node test.js
\`\`\`

## Time Complexity

- `get(key)`: O(1) average
- `put(key, value)`: O(1) average

## Files

- `LRUCache.js` — the `Cache` class implementation
- `test.js` — example usage / manual test cases