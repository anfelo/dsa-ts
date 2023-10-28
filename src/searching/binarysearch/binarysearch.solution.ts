export function binarysearch(arr: number[], item: number): number {
    let low = 0;
    let high = arr.length;

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] === item) {
            return mid;
        }

        // [low, high) low is inclusive and high is exclusive
        if (arr[mid] > item) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return -1;
}

export function binarysearchRecursive(arr: number[], low: number, high: number, item: number): number {
    if (low >= high) {
        return -1;
    }

    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === item) {
        return mid;
    }

    if (arr[mid] > item) {
        high = mid;
    } else {
        low = mid + 1;
    }

    return binarysearchRecursive(arr, low, high, item);
}
