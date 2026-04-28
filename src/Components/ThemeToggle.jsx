// import { Sun, Moon } from "lucide-react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ setDark }) {
    return (
        <div className="flex justify-end p-3 gap-3">

            {/* Light */}
            <button
                onClick={() => setDark(false)}
                className="p-2 rounded-full bg-gray-200"
            >
                <Sun />
            </button>

            {/* Dark */}
            <button
                onClick={() => setDark(true)}
                className="p-2 rounded-full bg-gray-700 text-white"
            >
                <Moon />
            </button>

        </div>
    );
}