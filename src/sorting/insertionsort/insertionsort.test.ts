import { insertionsort } from "./insertionsort";

test('insertionsort', () => {
    const arr = [35, 29, 8, 90, 15, 33];

    insertionsort(arr);

    expect(arr).toEqual([8, 15, 29, 33, 35, 90]);
})
