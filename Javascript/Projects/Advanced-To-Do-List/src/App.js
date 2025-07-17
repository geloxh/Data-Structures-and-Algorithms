import React, { useState } from "react";
import { Stack } from "./data-structures/stack";
import { quickSort } from "./algorithms/sorting";
import TaskInput from "./components/TaskInput";
import ToDoList from "./components/ToDoList";
import Controls from "./components/Controls";

const initialTasks = [];

const undoStack = new Stack();
const redoStack = new Stack();

export default function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [search, setSearch] = useState("");

    // Stack-based undo/redo
    const saveState = (newTasks) => {
        undoStack.push([...tasks]);
        redoStack.clear();
        setTasks(newTasks);
    };

    const addTask = (task) => {
        saveState([...tasks, task]);
    };

    const toggleTask = (id) => {
        saveState(
            tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)
        );
    };

    const deleteTask = (id) => {
        saveState(tasks.filter(t => t.id !== id));
    };

    const undo = () => {
        if (!undoStack.isEmpty()) {
            redoStack.push([...tasks]);
            setTasks(undoStack.pop());
        }
    };

    const redo = () => {
        if (!redoStack.isEmpty()) {
            undoStack.push([...tasks]);
            setTasks(redoStack.pop());
        }
    };

    // Always show tasks sorted by priority (Lowest # - Highest priority)
    const sortedTasks = quickSort(tasks, "priority");

    return (
        <div style={{
            maxWidth: 560,
            margin: "4rem auto",
            padding: "2rem",
            background: "#ffffff",
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
            <h1 style={{
                textAlign: "center",
                marginBottom: "2.5rem",
                color: "#1f2937",
                fontSize: "2.5rem",
                fontWeight: "bold"
            }}>
                Advanced To-Do List
                </h1>

                <TaskInput onAdd={addTask} />

                <Controls
                    onUndo={undo}
                    onRedo={redo}
                    canUndo={!undoStack.isEmpty()}
                    canRedo={!redoStack.isEmpty()}
                    search={search}
                    setSearch={setSearch}
                />

                <ToDoList
                    tasks={sortedTasks}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                    search={search}
                />
                <footer style={{ textAlign: 'center', marginTop: '2rem', color: '#6b7280' }}>
                    author:geloxh
                </footer>
        </div>
    ) ;
}