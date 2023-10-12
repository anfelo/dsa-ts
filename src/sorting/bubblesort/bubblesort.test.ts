import { bubblesort, bubblesortSwapped } from "./bubblesort";

test('bubblesort', () => {
    const arr = [35, 29, 8, 90, 15, 33];

    bubblesort(arr);

    expect(arr).toEqual([8, 15, 29, 33, 35, 90]);
})

test('bubblesort swapped', () => {
    const arr = [35, 29, 8, 90, 15, 33];

    bubblesortSwapped(arr);

    expect(arr).toEqual([8, 15, 29, 33, 35, 90]);
})
