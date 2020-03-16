import React from "react";
import { Route } from "react-router-dom";

class DashboardLayoutComponent extends React.Component {
  constructor(props) {
    super(props);

    this.callBackToComponent = this.callBackToComponent.bind(this);
  }

  componentDidMount() {
    console.log("Layout Component Did Mount");
    let _this = this;
    if (this.props.children.type._result instanceof Promise) {
      this.props.children.type._result.then(function(data) {
        _this.callBackToComponent();
      });
    } else {
      this.callBackToComponent();
    }
  }

  componentDidUpdate() {
    console.log("Layout Component Did Update");
    let _this = this;
    if (this.props.children.type._result instanceof Promise) {
      this.props.children.type._result.then(function(data) {
        _this.callBackToComponent();
      });
    } else {
      this.callBackToComponent();
    }
  }

  callBackToComponent() {
    let t = this.props.children.type;
    if (t.prototype !== undefined) {
      t.prototype.callBackToParentComponent(this);
    } else {
      // If you use your Route in Suspense
      t._result.prototype.callBackToParentComponent(this);
    }
  }

  callbackParent() {
    console.log("Layout function called from some component");
  }

  render() {
    return (
      <div className={"dashboard-main-container"}>
        <div className="container">
          <div className="row">
            <div className="col-sm-10 right-body-container">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <DashboardLayoutComponent {...matchProps}>
          <Component key={matchProps.match.params.id} {...matchProps} />
        </DashboardLayoutComponent>
      )}
    />
  );
};

export default DashboardLayoutRoute;
