import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StartUpList from "./StartUpList";
import { Route } from "react-router-dom";

export default class InvestorDashboard extends Component {
  state = {
    user: this.props.user,
    type: this.props.type,
  };

  render() {
    //investor or startup

    return (
      <div>
        <h1>     
          <Link to="/startuplist">ALL STARTUPS</Link>
        </h1>
        {/* <Route
          exact
          path="/startuplist"
          render={(props) => <StartUpList user={this.state.user} {...props} />}
        /> */}
      </div>
    );
  }
}
