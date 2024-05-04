import React, { useEffect, useState } from "react";

const Effect = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default Effect;
