// Hash Table (Map)

/**
 * Demonstrates basic usage of JavaScript built-in Map object,
 * which functions as a hash table.
 */

const myMap = new Map();

// Add key-value pair
function addToMap() {
    const key = document.getElementById('mapKey').value;
    const value = document.getElementById('mapValue').value;
    if (key && value) {
        myMap.set(key, value);
        renderMap();
        document.getElementById('mapKey').value = '';
        document.getElementById('mapValue').value = '';
    }
}

// Remove key
function removeFromMap() {
    const key = document.getElementById('mapKeyRemove').value;
    myMap.delete(key);
    renderMap();
    document.getElementById('mapKeyRemove').value = '';
}

// Render map contents
function renderMap() {
    let html = "";
    for (let [key, value] of myMap.entries()) {
        html += `<div class="map-item"><b>${key}</b>: ${value}</div>`;
    }
    document.getElementById('hashtable').innerHTML = html;
}

renderMap();

/*
    Hash TableOperations:
    - set(key, value) Add or update value by key
    - get(key): Retrieve value by key
    - delete(key): Remove key-value pair
    - Use cases: caching, lookups, dictionaries, etc.
*/