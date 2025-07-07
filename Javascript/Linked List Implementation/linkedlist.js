// Singly Linked List Implementation

/**
 * Node class represents each element in the linked list.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * LinkedList class provides methods to operate on the list.
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Adds a node with the given value to the end of the list.
   * @param {any} value
   */
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.render();
  }

  /**
   * Removes the node from the front of the list.
   */
  removeHead() {
    if (this.head) {
      this.head = this.head.next;
    }
    this.render();
  }

  /**
   * Renders the linked list visually in the #linkedlist div.
   */
  render() {
    let html = "";
    let current = this.head;
    while (current) {
      html += `<span class="ll-item">${current.value}</span>`;
      if (current.next) html += `<span class="ll-arrow">→</span>`;
      current = current.next;
    }
    document.getElementById("linkedlist").innerHTML = html;
  }
}

const myList = new LinkedList();
myList.render();

function appendLL() {
  const val = document.getElementById('llInput').value.trim();
  if (val) myList.append(val);
  document.getElementById('llInput').value = '';
}
function removeHeadLL() {
  myList.removeHead();
}

/*
  Linked List Operations:
  - Append: Add to end
  - Remove head: Remove from front
  - Use cases: dynamic memory allocation, undo functionality, navigation, etc.
*/