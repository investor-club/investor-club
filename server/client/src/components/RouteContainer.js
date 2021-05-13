import React from "react";
import StartUpEvaluation from "./StartUpEvaluation";
import SignUpChoice from "./SignUpChoice";
import { Route } from "react-router-dom";
import Login from "./Login";
import SignUpInvestor from "./SignUpInvestor";
import SignUpStartUp from "./SignUpStartUp";

export default class RouteContainer extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <div>
        <h1>Hello from RouteContainer</h1>
        <StartUpEvaluation /> 
        <SignUpChoice />
        <Route
          exact
          path="/signup/investor"
          render={(props) => (
            <SignUpInvestor setUser={this.setUser} {...props} />
          )}
        />
        <Route
          exact
          path="/signup/startup"
          render={(props) => (
            <SignUpStartUp setUser={this.setUser} {...props} />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}
