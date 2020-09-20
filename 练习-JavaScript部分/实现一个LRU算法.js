//该算法描述的是当空间不够时，按照最近最少使用的策略进行删除，实现对新元素的缓存
// 除了LRU（基于时间）策略 还有 先进先出策略 LFU（基于使用次数）

function LRUCache(capacity) {
    this.capacity = capacity;
    this.map = new Map();
}
LRUCache.prototype.get = function(key) {
    let _cacheValue = this.map.get(key);
    if (typeof _cacheValue === "undefined") return -1;
    // 使得让该key跑到map的头部
    this.map.delete(key);
    this.map.set(key, _cacheValue);
    return _cacheValue;
}

LRUCache.prototype.set = function(key, val) {
    if (this.map.has(key)) {
        this.map.delete(key);
    } else if (this.map.size >= this.capacity) {
        let tail = this.map.keys().next().value;
        this.map.delete(tail);
    }
    this.map.set(key, val);
}

let cache = new LRUCache(3);
cache.set(1, 1);
cache.set(2, 2);
// cache.get(1);
cache.set(3, 3);
cache.set(4, 4);
console.log(cache.map);