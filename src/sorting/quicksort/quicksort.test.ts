import { quicksort } from "./quicksort";

test('quicksort', () => {
    const arr = [35, 29, 8, 90, 15, 33];

    quicksort(arr, 0, arr.length - 1);

    expect(arr).toEqual([8, 15, 29, 33, 35, 90]);
})
