// Stack implementation using an array
let stack = [];

/**
 * Renders the stack array visually in the #stack div.
 */

function renderStack() {
    const stackDiv = document.getElementById('stack');
    stackDiv.innerHTML = stack
        .map(val => `<span class="stack-item">${val}</span>`)
        .reverse().join(''); // Show top of stack on the right
}

/**
 * Pushes a value onto the stack from the input field.
 */
function pushStack() {
    const input = document.getElementById('stackInput');
    const val = input.value.trim();
    if (val) stack.push(val);
    input.value = '';
    renderStack();
}

/**
 * Pops the top value off the stack.
 */
function popStack() {
    stack.pop();
    renderStack();
}

// Initial render
renderStack();

/*
    Stack Operations:
    - Push: Add item to the end (top)
    - Pop: Remove item from the end (top)
    - LIFO (Last-In, First-Out) structure
*/