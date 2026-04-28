export default function Display({ expression, result, finalMode }) {
    return (
        <div className="text-right p-4">

            {/* Expression hide after = */}
            {!finalMode && (
                <div className="text-2xl text-gray-500">
                    {expression || "0"}
                </div>
            )}

            {/* Result */}
            <div className="text-4xl font-bold">
                {result || expression || "0"}
            </div>
        </div>
    );
}