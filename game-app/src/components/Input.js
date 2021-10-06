import { useState } from "react";
import React from "react";

const Input = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <input
        className="input"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Please enter Number"
      />
      {console.log(query)}
      <button>Add</button>
    </div>
  );
};

export default Input;
