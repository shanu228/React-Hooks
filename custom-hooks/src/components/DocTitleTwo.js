import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function DocTitleTwo() {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  console.log("outside customhook");
  return (
    <div>
      {console.log("inside return1")}
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>

      {/* {console.log("inside return2")} */}
    </div>
  );
}

export default DocTitleTwo;
