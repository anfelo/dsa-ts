import { Stack } from "./stack";

test("should push new items to the top of the stack", () => {
    const stack = new Stack<number>();

    stack.push(69);
    stack.push(42);
    stack.push(777);

    expect(stack.top?.value).toBe(777);
    expect(stack.top?.next?.value).toBe(42);
    expect(stack.top?.next?.next?.value).toBe(69);
    expect(stack.length).toBe(3);
})

test("should pop the last item from the stack", () => {
    const stack = new Stack<number>();

    stack.push(69);
    stack.push(42);
    stack.push(777);

    let item = stack.pop();

    expect(item).toBe(777);
    expect(stack.length).toBe(2);
    expect(stack.top?.next?.value).toBe(69);

    item = stack.pop();

    expect(item).toBe(42);
    expect(stack.top?.value).toBe(69);

    item = stack.pop();

    expect(item).toBe(69);
    expect(stack.top).toBeUndefined();

    item = stack.pop();

    expect(item).toBeUndefined();
    expect(stack.length).toBe(0);
})
