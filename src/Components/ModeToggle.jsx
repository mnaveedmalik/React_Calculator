// import React, { useState } from "react";
import React, { useState } from "react";


export default function ModeToggle() {
    const [mode, setMode] = useState("light");

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "grey";
            document.body.style.color = "white";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    };

    const myStyle = {
        padding: "20px",
        textAlign: "center",
    };

    return (
        <div style={myStyle}>
            <h2>{mode.toUpperCase()} MODE</h2>

            <button
                onClick={toggleMode}
                style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                }}
            >
                Change Mode
            </button>
        </div>
    );
}