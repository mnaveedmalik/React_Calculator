// import React, { useState } from "react";
import React, { useState } from "react";
import Result from "./Result";
import Keypad from "./Keypad";

export default function Calculator() {
    const [result, setResult] = useState("");

    // ✅ SAFE CALCULATE FUNCTION (no eval)
    const calculate = (expression) => {
        try {
            const tokens = expression.match(/(\d+\.?\d*|[+\-*/])/g);

            if (!tokens) return "0";

            let total = parseFloat(tokens[0]);

            for (let i = 1; i < tokens.length; i += 2) {
                const operator = tokens[i];
                const nextNumber = parseFloat(tokens[i + 1]);

                if (isNaN(nextNumber)) return "Error";

                if (operator === "+") total += nextNumber;
                else if (operator === "-") total -= nextNumber;
                else if (operator === "*") total *= nextNumber;
                else if (operator === "/") total /= nextNumber;
            }

            return total.toString();
        } catch {
            return "Error";
        }
    };

    const handleClick = (e) => {
        const value = e.target.name;

        if (value === "C") {
            setResult("");   // clear
        }
        else if (value === "=") {
            if (result === "") {
                setResult("0");   // ✅ FIX (empty case)
                return;
            }

            const output = calculate(result);
            setResult(output);
        }
        else {
            setResult(result + value);
        }
    };

    return (
        <div
            style={{
                border: "2px solid black",
                padding: "20px",
                width: "250px",
                margin: "20px auto",
                textAlign: "center",
            }}
        >
            <h2>Calculator</h2>
            <Result result={result} />
            <Keypad onClick={handleClick} />
        </div>
    );
}