import { MinHeap } from "./heap";

test("should insert items to the heap", () => {
    const heap = new MinHeap();

    expect(heap.length).toBe(0);
    expect(heap.data).toEqual([]);

    fillHeap(heap, [51, 101, 70, 120, 200, 80, 111, 150, 308]);

    expect(heap.length).toBe(9);
    expect(heap.data).toEqual([51, 101, 70, 120, 200, 80, 111, 150, 308]);
});

test("should delete items from the heap", () => {
    const heap = new MinHeap();

    fillHeap(heap, [51, 101, 70, 120, 200, 80, 111, 150, 308]);

    let value = heap.delete();

    expect(heap.length).toBe(8);
    expect(value).toBe(51);

    value = heap.delete();

    expect(heap.length).toBe(7);
    expect(value).toBe(70);

    value = heap.delete();

    expect(heap.length).toBe(6);
    expect(value).toBe(80);

    heap.delete();
    heap.delete();
    heap.delete();
    heap.delete();
    heap.delete();
    value = heap.delete();

    expect(heap.length).toBe(0);
    expect(value).toBe(308);

    value = heap.delete();

    expect(heap.length).toBe(0);
    expect(value).toBe(-1);
});

test("should update item from the heap", () => {
    const heap = new MinHeap();

    fillHeap(heap, [51, 101, 70, 120, 200, 80, 111, 150, 308]);

    heap.update(51, 420);

    expect(heap.data).toEqual([70, 101, 80, 120, 200, 420, 111, 150, 308]);

    heap.update(120, 4);

    expect(heap.data).toEqual([4, 70, 80, 101, 200, 420, 111, 150, 308]);

    heap.update(70, 160);

    expect(heap.data).toEqual([4, 101, 80, 150, 200, 420, 111, 160, 308]);
});

function fillHeap(heap: MinHeap, arr: number[]): void {
    arr.forEach(v => heap.insert(v));
}
