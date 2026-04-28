import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${dark ? "bg-gray-900" : "bg-gray-200"
        }`}
    >
      <Calculator dark={dark} setDark={setDark} />
    </div>
  );
}

export default App;