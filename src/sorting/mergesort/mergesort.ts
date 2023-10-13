export function mergesort(arr: number[], left: number, right: number) {
    if (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        mergesort(arr, left, mid);
        mergesort(arr, mid + 1, right);
        merge(arr, left, mid + 1, right);
    }
}

function merge(arr: number[], left: number, mid: number, right: number) {
    let l_arr = arr.slice(left, mid);
    let r_arr = arr.slice(mid, right + 1);

    let i = 0;
    let j = 0;
    let k = left;

    while (i < l_arr.length && j < r_arr.length) {
        if (l_arr[i] <= r_arr[j]) {
            arr[k] = l_arr[i];
            i++;
        } else {
            arr[k] = r_arr[j];
            j++;
        }
        k++;
    }

    while (i < l_arr.length) {
        arr[k] = l_arr[i];
        i++;
        k++;
    }

    while (j < r_arr.length) {
        arr[k] = r_arr[j];
        j++;
        k++;
    }
}
