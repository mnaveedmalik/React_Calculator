import React from "react";
export default function Result({ result }) {
    return (
        <p
            style={{
                border: "1px solid black",
                padding: "10px",
                minHeight: "40px",
            }}
        >
            {result}
        </p>
    );
}