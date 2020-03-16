import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import DashboardLayoutRoute from "./DashboardLayout";

import Home from "./Home";

const Connections = lazy(() => import("./Connections"));

class App extends React.Component {
  constructor() {
    super();

    console.log("App Initialized");
  }

  render() {
    return (
      <BrowserRouter basename={this.APP_PATH}>
        <Switch>
          <DashboardLayoutRoute exact path="/" component={Home} />
        </Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <DashboardLayoutRoute path="/connections" component={Connections} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
