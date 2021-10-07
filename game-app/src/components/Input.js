import { useState } from "react";
import React from "react";

const Input = ({ math }) => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const submit = () => {
    if (number > math) {
      setResult("You Number bigger");
    } else if (number < math) {
      setResult("You Number bigger");
    } else {
      setResult("You win");
    }
  };

  //
  return (
    <div>
      <input
        className="input"
        onChange={(event) => setNumber(event.target.value)}
        placeholder="Please enter Number"
      />

      <button onClick={() => submit()}>submit</button>
      {result}
    </div>
  );
};

export default Input;
