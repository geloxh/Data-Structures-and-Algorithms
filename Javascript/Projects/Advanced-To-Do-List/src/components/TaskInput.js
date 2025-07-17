import React, { useState } from "react";

export default function TaskInput({ onAdd }) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState(3);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation
        if (!title.trim()) {
            setError("Task title cannot be empty");
            return;
        }
        
        if (title.trim().length > 100) {
            setError("Task title must be less than 100 characters");
            return;
        }
        
        // Clear any previous errors
        setError("");
        
        // Add the task
        onAdd({
            id: Date.now(),
            title: title.trim(),
            priority: Number(priority),
            done: false
        });
        
        // Reset form
        setTitle("");
        setPriority(3);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        if (error) setError(""); // Clear error when user starts typing
    };

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

    return (
        <div style={{ marginBottom: "2rem" }}>
            <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px"
            }}>
                <div style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    flexWrap: "wrap"
                }}>
                    <input
                        type="text"
                        placeholder="Enter task title..."
                        value={title}
                        onChange={handleTitleChange}
                        maxLength={100}
                        style={{
                            flex: 1,
                            minWidth: "200px",
                            padding: "10px 12px",
                            border: error ? "2px solid #e74c3c" : "1px solid #ddd",
                            borderRadius: 4,
                            fontSize: "1rem",
                            outline: "none",
                            transition: "border-color 0.2s ease"
                        }}
                        onFocus={(e) => {
                            if (!error) e.target.style.borderColor = "#3498db";
                        }}
                        onBlur={(e) => {
                            if (!error) e.target.style.borderColor = "#ddd";
                        }}
                    />
                    
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                    }}>
                        <label style={{
                            fontSize: "0.9em",
                            fontWeight: "500",
                            color: "#555"
                        }}>
                            Priority:
                        </label>
                        <select 
                            value={priority} 
                            onChange={e => setPriority(e.target.value)} 
                            style={{
                                padding: "10px 8px",
                                border: "1px solid #ddd",
                                borderRadius: 4,
                                fontSize: "0.9em",
                                backgroundColor: getPriorityColor(priority),
                                color: "white",
                                fontWeight: "bold",
                                cursor: "pointer",
                                outline: "none"
                            }}
                        >
                            <option value={1}>1 - Highest</option>
                            <option value={2}>2 - High</option>
                            <option value={3}>3 - Medium</option>
                            <option value={4}>4 - Low</option>
                            <option value={5}>5 - Lowest</option>
                        </select>
                    </div>
                    
                    <button 
                        type="submit"
                        disabled={!title.trim()}
                        style={{
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: 4,
                            backgroundColor: title.trim() ? "#27ae60" : "#bdc3c7",
                            color: "white",
                            fontSize: "1rem",
                            fontWeight: "500",
                            cursor: title.trim() ? "pointer" : "not-allowed",
                            transition: "background-color 0.2s ease"
                        }}
                        onMouseOver={(e) => {
                            if (title.trim()) e.target.style.backgroundColor = "#229954";
                        }}
                        onMouseOut={(e) => {
                            if (title.trim()) e.target.style.backgroundColor = "#27ae60";
                        }}
                    >
                        Add Task
                    </button>
                </div>
                
                {error && (
                    <div style={{
                        color: "#e74c3c",
                        fontSize: "0.85em",
                        marginTop: "4px",
                        padding: "8px",
                        backgroundColor: "#fdf2f2",
                        border: "1px solid #fecaca",
                        borderRadius: 4
                    }}>
                        {error}
                    </div>
                )}
                
                <div style={{
                    fontSize: "0.8em",
                    color: "#666",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <span>Characters: {title.length}/100</span>
                    <span>Priority 1 = Highest, Priority 5 = Lowest</span>
                </div>
            </form>
        </div>
    );
}