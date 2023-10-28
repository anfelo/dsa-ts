import { binarysearch, binarysearchRecursive } from "./binarysearch";

test('binarysearch', () => {
    const arr = [8, 15, 29, 33, 35, 90];

    let index = binarysearch(arr, 90);

    expect(index).toBe(5);

    index = binarysearch(arr, 20);

    expect(index).toBe(-1);
})

test('binarysearch recursive', () => {
    const arr = [8, 15, 29, 33, 35, 90];

    let index = binarysearchRecursive(arr, 0, arr.length, 90);

    expect(index).toBe(5);

    index = binarysearchRecursive(arr, 0, arr.length, 20);

    expect(index).toBe(-1);
})
