# Advanced To-Do List (with Data Structures & Algorithms)

A React web app that demonstrates core data structures and algorithms in JavaScript, in the contect of a To-Do List.

advanced-todo/
├── public/
│   └── index.html
├── src/
│   ├── data-structures/
│   │   ├── heap.js
│   │   └── stack.js
│   ├── algorithms/
│   │   └── sorting.js
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── ToDoList.js
│   │   └── Controls.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md

## Features
- **Priority tasks** (sorted by priority number)
- **Undo/Redo** (stack)
- **QuickSort** (for sorting tasks by priority)
- **Search** (filter tasks by text)
- **Clean UI** (React)

## Data Structures & Algorithms Used
- **Stack**: For undo/redo
- **Heap**: (Code included; you can extend for even more advanced features)
- **QuickSort**: For sorting tasks by priority

## Getting Started

1. Clone this repo or copy files into a new React project (e.g. with [Create React App](https://create-react-app.dev/) or [Vite](https://vitejs.dev/)).
2. `npm install`
3. `npm start`
4. Visit [http://localhost:3000](http://localhost:3000)

## File Structure

- `src/data-structures/` — Stack and Heap implementations
- `src/algorithms/` — Sorting algorithms
- `src/components/` — UI components
- `src/App.js` — Main app logic

---

Explore, extend, and learn!