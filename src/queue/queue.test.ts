import { Queue } from "./queue"

test("should enqueue new items to the tail of the queue", () => {
    const queue = new Queue<number>();

    queue.enqueue(42);

    expect(queue.peek()).toBe(42);
    expect(queue.length).toBe(1);

    queue.enqueue(69);

    expect(queue.peek()).toBe(42);
    expect(queue.length).toBe(2);
})

test("should deque items from the head of the queue", () => {
    const queue = new Queue<number>();

    let item = queue.deque();

    expect(item).toBeUndefined();

    queue.enqueue(42);
    queue.enqueue(69);
    queue.enqueue(777);

    item = queue.deque();

    expect(item).toBe(42);
    expect(queue.peek()).toBe(69);
    expect(queue.length).toBe(2)
})
