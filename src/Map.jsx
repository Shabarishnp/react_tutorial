import React from "react";

const Map = () => {
  let array = [
    "Shabarish",
    "Ramaiah",
    "Rishi",
    "Varshini",
    "surya",
    "Srikanth",
  ];
  return (
    <div>
      <ul>
        {array.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default Map;
