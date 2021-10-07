import "./App.css";
import Input from "./components/Input";
const math = Math.floor(Math.random() * 10);
function App() {
  return (
    <div className="continer">
      <h1>Guessing Game</h1>
      <h5>Guess a number between 1 to 10</h5>
      <Input math={math} />
    </div>
  );
}

export default App;
