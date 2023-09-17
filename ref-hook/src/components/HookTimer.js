import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef();
  useEffect(() => {
    console.log("before");
    interValRef.current = setInterval(() => {
      console.log("set", interValRef.current);
      setTimer((timer) => timer + 1);
    }, 1000);
    console.log("before return of clearinterval");
    return () => {
      console.log("after1", interValRef.current);
      clearInterval(interValRef.current);
      console.log("after2", interValRef.current);
    };
  }, []);
  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(interValRef.current)}>
        Clear Timer
      </button>
    </div>
  );
}

export default HookTimer;

// 0. useRef's object- holds 'current' object
// 1. useRef - is not just for focusing an element; (aka;) hold reference to a dom node;
// 2. it can also be used to store any mutable value.
// 3. ALSO - even though it makes - value persists through rerenders, while also not causing any additional renders when its value changes. - strange !!!!!
