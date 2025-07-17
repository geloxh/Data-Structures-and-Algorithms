import React from "react";

const getPriorityColor = (priority) => {
    switch (Number(priority)) {
        case 1: return "#e74c3c"; // Red - Highest
        case 2: return "#f39c12"; // Orange
        case 3: return "#f1c40f"; // Yellow
        case 4: return "#2ecc71"; // Green
        case 5: return "#3498db"; // Blue - Lowest
        default: return "#95a5a6"; // Gray
    }
};

const TaskItem = ({ task, onToggle, onDelete }) => (
    <div style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem 1.25rem",
        borderBottom: "1px solid #e5e7eb",
        gap: "1rem",
        transition: "all 0.2s ease",
        backgroundColor: task.done ? "#f9fafb" : "#ffffff",
        borderRadius: 8
    }}>
        <div style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: getPriorityColor(task.priority),
            flexShrink: 0
        }} title={`Priority: ${task.priority}`}></div>
        <span style={{
            flex: 1,
            textDecoration: task.done ? "line-through" : "none",
            color: task.done ? "#9ca3af" : "#374151",
            fontSize: "1rem",
            transition: "color 0.2s ease"
        }}>
            {task.title}
        </span>
        <div style={{ display: "flex", gap: "8px" }}>
            <button
                onClick={() => onToggle(task.id)}
                style={{
                    background: task.done ? "#10b981" : "transparent",
                    border: "1px solid",
                    borderColor: task.done ? "#10b981" : "#d1d5db",
                    color: task.done ? "#ffffff" : "#374151",
                    borderRadius: 6,
                    padding: "0.3rem 0.7rem",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    transition: "all 0.2s ease"
                }}
            >
                {task.done ? "✓ Completed" : "Complete"}
            </button>
            <button 
                onClick={() => onDelete(task.id)}
                style={{
                    background: "transparent",
                    border: "none",
                    color: "#ef4444",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    fontWeight: "300",
                    lineHeight: 1,
                    padding: "0 0.25rem",
                    transition: "color 0.2s ease"
                }}
                title="Delete task"
            >
                ×
            </button>
        </div>
    </div>
);

export default function ToDoList({ tasks, onToggle, onDelete, search }) {
    const filteredTasks = tasks.filter(task => 
        task.title.toLowerCase().includes(search.toLowerCase())
    );

    if (tasks.length === 0) {
        return <p style={{ textAlign: "center", color: "#888", marginTop: "2rem" }}>No tasks yet. Add one above!</p>;
    }

    if (filteredTasks.length === 0) {
        return <p style={{ textAlign: "center", color: "#888", marginTop: "2rem" }}>No tasks found for "{search}".</p>;
    }

    return (
        <div style={{
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            overflow: "hidden",
            marginTop: "1.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
        }}>
            {filteredTasks.map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    onToggle={onToggle} 
                    onDelete={onDelete} 
                />
            ))}
        </div>
    );
}