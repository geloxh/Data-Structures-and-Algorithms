import React from "react";

export default function Controls({ onUndo, onRedo, canUndo, canRedo, search, setSearch }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
            gap: "12px",
            flexWrap: "wrap"
        }}>
            <div style={{ display: "flex", gap: "8px" }}>
                <button 
                    onClick={onUndo} 
                    disabled={!canUndo} 
                    style={{
                       padding: "0.5rem 1rem",
                       border: "1px solid transparent",
                       borderRadius: 6,
                       backgroundColor: canUndo ? "#3b82f6" : "#9ca3af",
                       color: "white",
                       cursor: canUndo ? "pointer" : "not-allowed",
                       fontSize: "0.9rem",
                       fontWeight: 500,
                       transition: "all 0.2s ease"
                   }}
                    onMouseOver={(e) => {
                        if (canUndo) e.target.style.backgroundColor = "#2980b9";
                    }}
                    onMouseOut={(e) => {
                        if (canUndo) e.target.style.backgroundColor = "#3498db";
                    }}
                >
                    ↶ Undo
                </button>
                
                <button 
                    onClick={onRedo} 
                    disabled={!canRedo} 
                    style={{
                       padding: "0.5rem 1rem",
                       border: "1px solid transparent",
                       borderRadius: 6,
                       backgroundColor: canRedo ? "#10b981" : "#9ca3af",
                       color: "white",
                       cursor: canRedo ? "pointer" : "not-allowed",
                       fontSize: "0.9rem",
                       fontWeight: 500,
                       transition: "all 0.2s ease"
                   }}
                    onMouseOver={(e) => {
                        if (canRedo) e.target.style.backgroundColor = "#27ae60";
                    }}
                    onMouseOut={(e) => {
                        if (canRedo) e.target.style.backgroundColor = "#2ecc71";
                    }}
                >
                    ↷ Redo
                </button>
            </div>
            
            <div style={{ 
                flex: 1, 
                minWidth: "200px",
                position: "relative"
            }}>
                <input
                    type="text"
                    value={search}
                    placeholder="🔍 Search tasks..."
                    onChange={e => setSearch(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "0.5rem 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: 6,
                        fontSize: "0.9rem",
                        outline: "none",
                        transition: "border-color 0.2s ease, box-shadow 0.2s ease"
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = "#3b82f6";
                        e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.2)";
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db";
                        e.target.style.boxShadow = "none";
                    }}
                />
                {search && (
                    <button
                        onClick={() => setSearch("")}
                        style={{
                            position: "absolute",
                            right: "8px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "1.2em",
                            color: "#999",
                            padding: "0",
                            width: "20px",
                            height: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        title="Clear search"
                    >
                        ×
                    </button>
                )}
            </div>
        </div>
    );
}