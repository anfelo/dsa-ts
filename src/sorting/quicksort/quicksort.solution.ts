export function quicksort(arr: number[], low: number, high: number) {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quicksort(arr, low, pivot);
        quicksort(arr, pivot + 1, high);
    }
}

function partition(arr: number[], low: number, high: number): number {
    let pivot = arr[low];
    let left = low;
    let right = high;

    while (left < right) {
        while (arr[left] <= pivot && left < high) {
            left++;
        }

        while (arr[right] > pivot && right > low) {
            right--;
        }

        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }

    arr[low] = arr[right];
    arr[right] = pivot;

    return right;
}
