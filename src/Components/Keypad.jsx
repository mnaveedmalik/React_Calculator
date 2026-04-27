
import React from "react";
export default function Keypad({ onClick }) {
    const btnStyle = {
        padding: "10px",
        margin: "5px",
        width: "50px",
        cursor: "pointer",
    };

    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+",
        "C"
    ];

    return (
        <div>
            {buttons.map((btn) => (
                <button
                    key={btn}
                    name={btn}
                    onClick={onClick}
                    style={btnStyle}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
}