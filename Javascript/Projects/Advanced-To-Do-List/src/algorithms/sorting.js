export function quickSort(arr, key = "priority") {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length  - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][key] < pivot[key]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left, key), pivot, ...quickSort(right, key)];
}

// Alternative implementation for better performance with large arrays
export function quickSortInPlace(arr, key = "priority", low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, key, low, high);
        quickSortInPlace(arr, key, low, pivotIndex - 1);
        quickSortInPlace(arr, key, pivotIndex + 1, high);
    }
    return arr;
}

function partition (arr, key, low, high) {
    const pivot = arr[high][key];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j][key] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}