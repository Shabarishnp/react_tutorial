// // import logo from "./logo.svg";
// import "./App.css";
// import Hell from "./components/Hello";
// import Project from "./components/pages/Project";
// import Portfolio from "./components/pages/Portfolio";
// import Home from "./components/pages/Home";

// function App() {
//   return (
//     <div>
//       <h1>
//         <Hell />
//         <Project />
//         <Portfolio />
//         <Home/>
//       </h1>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Project from "./components/pages/Project";
// import { Route, Routes } from "react-router-dom";
// import "./components/Portfolio/About.css";
// import Store from "./Store";
// import Project from "./components/pages/Project";
// import Portfolio from "./components/pages/Portfolio";
// import Home from "./components/Portfolio/Home";
// import NotFound from "./components/Portfolio/NotFound";
// import Inbox from "./components/Inbox";
// import MailA from "./components/MailA";
// import MailB from "./components/MailB";

// function App() {
//   return (
//     <div>
// {/* <Home />
// <Routes>
//   <Route path="/project" element={<Project />} />
//   <Route path="/portfolio" element={<Portfolio />} />
//   <Route path="inbox" element={<Inbox />}></Route>
//   <Route path="/inbox/mailA" element={<MailA />} />
//   <Route path="/inbox/mailB" element={<MailB />} />
//   <Route path="*" element={<NotFound />} />
// </Routes> */}
//       <Store />
//     </div>
//   );
// }

// export default App;

//..........................................................................................

// portfolio

// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>My Portfolio</h1>
//       </header>
//       <main>
//         <section className="about">
//           <h2>About Me</h2>
//           <p>
//             Hello! I'm [Your Name], a passionate [Your Profession]. I enjoy
//             learning new technologies and building exciting projects.
//           </p>
//         </section>
//         <section className="projects">
//           <h2>Projects</h2>
//           <div className="project">
//             <h3>Project 1</h3>
//             <p>Description of project 1</p>
//           </div>
//           <div className="project">
//             <h3>Project 2</h3>
//             <p>Description of project 2</p>
//           </div>
//           {/* Add more projects here */}
//         </section>
//         <section className="contact">
//           <h2>Contact Me</h2>
//           <p>Email: [Your Email]</p>
//           <p>Phone: [Your Phone Number]</p>
//           <p>LinkedIn: [Your LinkedIn Profile]</p>
//           {/* You can add more contact information here */}
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2024 My Portfolio. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

//use state.....................................
// import { useState } from "react";

// export default function Counter() {
//   const [age, setAge] = useState(23);

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

import React from "react";
// import Project from "./components/pages/Project";
// import { Route, Routes } from "react-router-dom";
// import "./components/Portfolio/About.css";
// import LifeCycle from "./LifeCycle";
import Effect from "./Effect";
import Data from "./Data";
// import Life from "./Life";
// import State from "./State";
// import Map from "./Map.jsx";
// import Media from "./Media";
// import Store from "./Store";
// import Project from "./components/pages/Project";
// import Portfolio from "./components/pages/Portfolio";
// import Home from "./components/Portfolio/Home";
// import NotFound from "./components/Portfolio/NotFound";
// import Inbox from "./components/Inbox";
// import MailA from "./components/MailA";
// import MailB from "./components/MailB";

function App() {
  return (
    <div>
      {/* <Home />
      <Routes>
        <Route path="/project" element={<Project />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="inbox" element={<Inbox />}></Route>
        <Route path="/inbox/mailA" element={<MailA />} />
        <Route path="/inbox/mailB" element={<MailB />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      {/* <Store />
      <Media />
      <Map />
      <State /> */}
      {/* <LifeCycle /> */} {/*constructor*/}
      {/* <LifeCycle props="hello" age={30} /> */} {/*get derived method*/}
      {/* <LifeCycle /> */}
      {/* <Life /> */}
      <Effect />
      <Data />
    </div>
  );
}

export default App;
