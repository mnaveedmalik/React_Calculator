
import React from "react";

export default function Display({ expression, setExpression, inputRef }) {
    return (
        <div className="mb-4">
            <input
                ref={inputRef}
                type="text"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                className="w-full text-right text-3xl p-3 outline-none bg-transparent"
            />
        </div>
    );
}