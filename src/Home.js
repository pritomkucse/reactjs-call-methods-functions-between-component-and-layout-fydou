import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();

    console.log("Home");
  }

  // this function will be called from layout function with self reference
  // so calling [layout.callbackParent()] will call a function inside layout component itself
  callBackToParentComponent(layout) {
    console.log("callBackToParentComponent for Home");
    layout.callbackParent();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to={"/connections"}>Connections</Link>
      </div>
    );
  }
}

export default Home;
