import React from "react";
import { useState } from "react";

const Counter = () => {
  let [count, setcount] = useState(0);

  const handleDecrement = () => {
    count = count - 1;
    setcount(count);
  };
  const handleIncrement = () => {
    count = count + 1;
    setcount(count);
  };
  return (
    <>
      <div className="App">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={handleDecrement}
        >
          {" "}
          Decrement
        </button>
        <span className="value">{count}</span>
        <button
          className="button"
          aria-label="Increment value"
          onClick={handleIncrement}
        >
          {" "}
          Increment
        </button>
      </div>
    </>
  );
};

export default Counter;
