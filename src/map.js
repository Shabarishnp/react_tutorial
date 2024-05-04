// const numbers = [1, 2, 3, 4, 5, 6];

// let newArray = numbers.map((element, index) => {
//   let x = element * 2;
//   console.log(x, index);
// });

// console.log(newArray);
//................................................................................................

//use state example...........................................................................

// import { useState } from "react";

// export default function Counter() {
//   const [age, setAge] = useState(42);

//   function increment() {
//     setAge((a) => a + 1);
//   }

//   return (
//     <>
//       <h1>Your age: {age}</h1>
//       <button
//         onClick={() => {
//           increment();
//           increment();
//           increment();
//         }}
//       >
//         +3
//       </button>
//       <button
//         onClick={() => {
//           increment();
//         }}
//       >
//         +1
//       </button>
//     </>
//   );
// }

const numbers = [1, 2, 3, 4, 5, 6];
// let x;

let newArray = numbers.map((element, index) => {
  let x = element * 2;
  console.log(x, index);
});
console.log(newArray);
