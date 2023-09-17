import { useState } from "react";

function useCounter(initialCount = 0, value) {
  console.log("inside custom hook");

  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  const reset = () => {
    setCount(initialCount);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
