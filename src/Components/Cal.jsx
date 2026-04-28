import React, { useState, useRef } from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import ThemeToggle from "./ThemeToggle";

export default function Cal({ dark, setDark }) {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");
    const [finalMode, setFinalMode] = useState(false);

    const inputRef = useRef(null);

    const calculate = (exp) => {
        try {
            const tokens = exp.match(/(\d+\.?\d*|[+\-*/])/g);
            if (!tokens) return "";

            let res = parseFloat(tokens[0]);

            for (let i = 1; i < tokens.length; i += 2) {
                const op = tokens[i];
                const num = parseFloat(tokens[i + 1]);

                if (op === "+") res += num;
                if (op === "-") res -= num;
                if (op === "*") res *= num;
                if (op === "/") res /= num;
            }

            return res;
        } catch {
            return "";
        }
    };

    const handleClick = (val) => {
        const input = inputRef.current;
        const start = input?.selectionStart || 0;

        if (val === "C") {
            setExpression("");
            setResult("");
            setFinalMode(false);
            return;
        }

        if (val === "DEL") {
            if (start === 0) return;

            const newExp =
                expression.slice(0, start - 1) + expression.slice(start);

            setExpression(newExp);
            setResult(calculate(newExp));

            setTimeout(() => {
                input.selectionStart = input.selectionEnd = start - 1;
            }, 0);
            return;
        }

        if (val === "=") {
            const res = calculate(expression);
            setResult(res);
            setExpression("");
            setFinalMode(true);
            return;
        }

        let newExp;

        if (finalMode) {
            if (["+", "-", "*", "/"].includes(val)) {
                newExp = result.toString() + val;
            } else {
                newExp = val;
            }
        } else {
            newExp =
                expression.slice(0, start) + val + expression.slice(start);
        }

        setExpression(newExp);
        setResult(calculate(newExp));
        setFinalMode(false);

        setTimeout(() => {
            input.selectionStart = input.selectionEnd = start + val.length;
        }, 0);
    };

    return (
        <div
            className={`w-[320px] rounded-3xl shadow-2xl p-4 ${dark ? "bg-black text-white" : "bg-white text-black"
                }`}
        >
            <ThemeToggle setDark={setDark} />

            {!finalMode && (
                <Display
                    expression={expression}
                    setExpression={setExpression}
                    inputRef={inputRef}
                />
            )}

            <div
                className={`text-right mb-2 ${finalMode
                    ? dark
                        ? "text-4xl font-bold text-white"
                        : "text-4xl font-bold text-black" // 👈 LIGHT MODE FIX
                    : dark
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
            >
                {result}
            </div>

            <Keypad onClick={handleClick} dark={dark} />
        </div>
    );
}