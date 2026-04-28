const buttons = [
    "C", "/", "*",
    "7", "8", "9",
    "4", "5", "6",
    "1", "2", "3",
    "0", ".", "+", "-", "="
];

export default function Keypad({ onClick }) {
    return (
        <div className="grid grid-cols-4 gap-3 mt-4">
            {buttons.map((btn) => (
                <button
                    key={btn}
                    onClick={() => onClick(btn)}
                    className="
            p-4 rounded-full 
            bg-gray-200 dark:bg-gray-700 
            text-black dark:text-white 
            hover:bg-gray-300 dark:hover:bg-gray-600
            transition
          "
                >
                    {btn}
                </button>
            ))}
        </div>
    );
}