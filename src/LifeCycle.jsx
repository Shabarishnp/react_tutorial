// constructor

// import React, { Component } from "react";

// export class LifeCycle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Amir",
//       age: "35 -",
//       nickname: "Drakula ",
//     };
//   }
//   render() {
//     return (
//       <div>
//         {this.state.name} <br />
//         {this.state.age}
//         {this.state.nickname}
//       </div>
//     );
//   }
// }
// export default LifeCycle;

import React, { Component } from "react";

export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shabari",
      age: 35,
      mount: true,
      //   nickname: "Drakula ",
    };
  }
  //   static getDerivedStateFromProps(props, state) { // gerderivedstatefromprops method
  //     return { age: props.age, name: props.props };
  //   }
  // component did mount
  componentDidMount() {
    console.log("component mount");
  }

  componentDidUpdate() {
    console.log("component updates");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("pri").innerText = prevState.name;
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name !== this.state.name) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        {this.state.name}-{this.state.age}
        <button onClick={() => this.setState({ name: "Galipata" })}>
          Change
        </button>
        <h1 id="pri">pri</h1>
      </div>
    );
  }
}
export default LifeCycle;
