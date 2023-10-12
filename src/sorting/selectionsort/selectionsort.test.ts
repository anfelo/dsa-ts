import { selectionsort } from "./selectionsort";

test('selectionsort', () => {
    const arr = [35, 29, 8, 90, 15, 33];

    selectionsort(arr);

    expect(arr).toEqual([8, 15, 29, 33, 35, 90]);
})
