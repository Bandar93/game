import React from "react";

const Input = () => {
  return (
    <div>
      <input className="input" />
      <button onClick={() => Math.floor(Math.random() * 100)}>Add</button>
    </div>
  );
};

export default Input;
