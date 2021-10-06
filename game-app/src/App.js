import Input from "./components/Input";

function App() {
  const math = Math.floor(Math.random() * 100);

  return (
    <div>
      <h1>Guessing Game</h1>
      <Input />
    </div>
  );
}

export default App;
