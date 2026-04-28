const buttons = [
    "C", "DEL", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", "."
];

export default function Keypad({ onClick, dark }) {
    return (
        <div className="grid grid-cols-4 gap-3 mt-4">
            {buttons.map((btn) => (
                <button
                    key={btn}
                    onClick={() => onClick(btn)}
                    className={`p-4 rounded-full ${dark
                            ? "bg-gray-700 text-white"
                            : "bg-gray-200 text-black"
                        }`}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
}