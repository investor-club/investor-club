import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUpChoice extends Component {
  render() {
    return (
      <div>
        <h2>
          <Link to="/signup/startup">Startup</Link>
        </h2>
        <h2>
          <Link to="/signup/investor">Investor</Link>
        </h2>
      </div>
    );
  }
}
