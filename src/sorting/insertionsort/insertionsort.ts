export function insertionsort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i;

        while (j >= 1 && arr[j - 1] > curr) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = curr;
    }
}
