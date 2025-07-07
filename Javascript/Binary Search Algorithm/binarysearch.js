// Render Initial Array
document.getElementById('bsArray').innerText = [1, 3, 5, 7, 9, 11, 13].join(', ');

// Binary Search Implementation

/**
 * Performs binary search on a sorted array for a target  value.
 * @param {number[]} arr - Sorted array
 * @param {number} target - Value to search for
 * @returns {number} Index of target, or -1 if not found
 */
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid -1;
    }
    return -1;
}

// Demo usage with UI
let sortedArray = [1, 3, 5, 7, 9, 11, 13];

function searchBS() {
    const target = Number(document.getElementById('bsInput').value);
    const index = binarySearch(sortedArray, target);
    document.getElementById('bsResult').innerText =
    index !== -1 ? `Found at index: ${index}` : "Not found";
}

/*
    Binary search:
    - Efficiently searches sorted arrays
    - Time complexity: O(log n)
    - Used in databases, UI Search, etc.
*/