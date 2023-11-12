export function selectionsort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let max = 0;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[max]) {
                max = j;
            }
        }

        const last = arr.length - 1 - i;
        if (max !== last) {
            [arr[max], arr[last]] = [arr[last], arr[max]];
        }
    }
}
