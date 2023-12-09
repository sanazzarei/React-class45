import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  let feedback;
  if(count > 10) {
   feedback =  "It's higher than 10!"}
    else
    { feedback = "Keep counting...";}

  const IncrementHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Count count={count} />
      <Button handleClick={IncrementHandler} />
      <p>{feedback}</p>
    </div>
  );
};

export default Counter;
