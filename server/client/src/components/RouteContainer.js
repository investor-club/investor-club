import React from "react";
import StartUpEvaluation from "./StartUpEvaluation";
import SignIn from "./SignIn";

export default class RouteContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from RouteContainer</h1>
        <StartUpEvaluation />
        <SignIn />
      </div>
    );
  }
}
