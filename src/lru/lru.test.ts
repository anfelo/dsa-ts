import { LRU } from "./lru";

test("should evict the least recently used from cache", () => {
    const lru = new LRU<number, string>(5);

    expect(lru.length).toBe(0);

    lru.update(1, "foo");
    lru.update(2, "bar");
    lru.update(3, "baz");

    expect(lru.length).toBe(3);
    expect(lru.get(1)).toBe("foo");
    expect(lru.get(2)).toBe("bar");
    expect(lru.get(3)).toBe("baz");
    expect(lru.get(4)).toBeUndefined();

    lru.update(4, "foobar");
    lru.update(5, "foobar");
    lru.update(6, "foobaz");

    expect(lru.length).toBe(5);
    expect(lru.get(1)).toBeUndefined();
    expect(lru.get(2)).toBe("bar");

    lru.update(7, "wow");

    expect(lru.get(3)).toBeUndefined();
    expect(lru.get(2)).toBe("bar");
});
