import { mergesort } from "./mergesort";

test('mergesort', () => {
    const arr = [10, 4, 43, 5, 57, 91, 45, 9, 7];

    mergesort(arr, 0, arr.length - 1);

    expect(arr).toEqual([4, 5, 7, 9, 10, 43, 45, 57, 91]);
})
