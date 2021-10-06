import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [number, setNumber] = useState();
  return (
    <div>
      <h1>Guessing Game</h1>
      <Input setNumber={setNumber} />
    </div>
  );
}

export default App;
