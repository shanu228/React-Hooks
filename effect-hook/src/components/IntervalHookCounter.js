import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("before");
    const interval = setInterval(tick, 1000);
    return () => {
      console.log("after");
      clearInterval(interval);
    };
  }, [count]);
  return <div>{count}</div>;
}

export default IntervalHookCounter;
