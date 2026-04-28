import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

export default function Cal({ dark, setDark }) {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");
    const [finalMode, setFinalMode] = useState(false);

    const calculate = (exp) => {
        try {
            if (!/[+\-*/]/.test(exp)) return "";
            return Function("return " + exp)();
        } catch {
            return "";
        }
    };

    const handleClick = (val) => {
        if (val === "C") {
            setExpression("");
            setResult("");
            setFinalMode(false);
        } else if (val === "=") {
            const res = calculate(expression);
            setResult(res);
            setExpression(res.toString());
            setFinalMode(true);
        } else {
            const newExp = finalMode ? val : expression + val;
            setExpression(newExp);
            setResult(calculate(newExp));
            setFinalMode(false);
        }
    };

    return (
        <div
            className={`
        w-[320px] rounded-3xl shadow-2xl p-4
        ${dark ? "bg-black text-white" : "bg-white text-black"}
      `}
        >
            {/* 🔝 Top Icons */}
            <div className="flex justify-end gap-3 mb-4">

                <button
                    onClick={() => setDark(false)}
                    className="p-2 rounded-full bg-gray-200"
                >
                    <Sun size={18} />
                </button>

                <button
                    onClick={() => setDark(true)}
                    className="p-2 rounded-full bg-gray-700 text-white"
                >
                    <Moon size={18} />
                </button>

            </div>

            {/* 📟 Display */}
            <Display
                expression={expression}
                result={result}
                finalMode={finalMode}
            />

            {/* 🔢 Keypad */}
            <Keypad onClick={handleClick} dark={dark} />
        </div>
    );
}