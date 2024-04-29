import React, { useState } from "react";
const Body = () => {
  const [count, setCount] = useState(0);
  let count1 = 100;

  const myFunctionInc = () => {
    count1 = count1 + 1;
    setCount(count + 1);
    console.log("Local variable count", count1);
  };
  console.log("Hook variable count", count);

  const myFunctionDec = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <p className="para">Count : {count}</p>
      <button className="buttonIncrement" onClick={myFunctionInc}>
        Increase Count
      </button>

      <button className="buttonDecrement" onClick={myFunctionDec}>
        Decrease Count
      </button>
    </div>
  );
};
export default Body;
