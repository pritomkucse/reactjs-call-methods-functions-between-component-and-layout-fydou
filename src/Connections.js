import React from "react";
import { Link } from "react-router-dom";

class Connections extends React.Component {
  constructor() {
    super();

    console.log("Connections");
  }

  // this function will be called from layout function with self reference
  // so calling [layout.callbackParent()] will call a function inside layout component itself
  callBackToParentComponent(layout) {
    console.log("callBackToParentComponent for Connections");
    layout.callbackParent();
  }

  render() {
    return (
      <div>
        <h1>Connections</h1>
        <Link to={"/"}>Home</Link>
      </div>
    );
  }
}

export default Connections;
