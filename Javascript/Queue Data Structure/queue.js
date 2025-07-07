// Queue implementation using an array
let queue = [];

/**
 * Renders the queue array visually in the #queue div.
 */
function renderQueue() {
 const queueDiv = document.getElementById('queue');
 queueDiv.innerHTML = queue
   .map(val => `<span class="queue-item">${val}</span>`)
   .join('');
}

/**
 * Adds a value to the end of the queue.
 */
function enqueue() {
    const input = document.getElementById('queueInput');
    const val = input.value.trim();
    if (val) queue.push(val);
    input.value = '';
    renderQueue();
}

/**
 * Removes a value from the front of the queue.
 */
function dequeue() {
    queue.shift();
    renderQueue();
}

// Initial render
renderQueue();

/*
 Queue Operations:
 - Enqueue: Add item to the end (tail)
 - Dequeue: Remove item from the start (head)
 - FIFO (First-In, First-Out) structure
*/