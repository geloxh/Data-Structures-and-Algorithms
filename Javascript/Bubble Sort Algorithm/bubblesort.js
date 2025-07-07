// Initial array of numbers to be sorted
let nums = [7, 2, 9, 4, 3];

/**
 * Renders the numbers array visually in the #numbers div.
 */
function renderNums() {
    document.getElementById('numbers').innerHTML =
      nums.map(n => `<span>${n}</span>`).join('');
}

/**
 * Performs bubble sort on the nums array and updates the display.
 * Bubble sort repeatedly steps through the list, compares adjacent elements
 * and swaps them if they are in the wrong order.
 */
function bubbleSort() {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                // Swap
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    renderNums();
}

// Initial render
renderNums();

/*
    Bubble Sort Steps:
    - Start at the beginning of the array.
    - Compare each pair of adjacent items and swap them if they are in the wong order.
    - Continue looping through the array until not swaps are needed.
    -Time complexity: O(n^2)
*/