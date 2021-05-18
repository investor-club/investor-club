import React from "react";
import SignUpChoice from "./SignUpChoice";
import { Route } from "react-router-dom";
import Login from "./Login";
import SignUpInvestor from "./SignUpInvestor";
import SignUpStartUp from "./SignUpStartUp";
import StartUpList from "./StartUpList";
import InvestorDashboard from "./InvestorDashboard";
import StartUpProfile from "./StartUpProfile";
import StartUpDashboard from "./StartUpDashboard";
import LandingPage from "./LandingPage";
import InvestorProfile from "./InvestorProfile";
import StartUpDetails from "./StartupDetails";
import axios from "axios";

export default class RouteContainer extends React.Component {
  state = {
    user: this.props.user,
    // displayStartupEval: true,
    type: this.props.type,
  };

  setUser = (user) => {
    this.setState({ user });
  };
  setType = (type) => {
    this.setState({ type });
  };

  // let landing;
  // this.state.landing ? landing = (<LandingPage />) : landing = (<></>)
  render() {
    console.log("I AM TYPE IN ROUTECONTAINER", this.type);

    return (
      <div>
        <Route
          exact
          path="/"
          render={(props) => <LandingPage user={this.state.user} {...props} />}
        />

        <Route
          exact
          path="/signupchoice"
          render={(props) => <SignUpChoice setUser={this.setUser} {...props} />}
        />

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
          render={(props) => (
            <Login
              // setUser={this.setUser}
              // setType={this.setType}
              setAppState={this.props.setAppState}
              {...props}
            />
          )}
        />

        <Route
          exact
          path="/investordashboard"
          render={(props) => (
            <InvestorDashboard
              {...props}
              user={this.state.user}
              type={this.state.type}
              setAppState={this.props.setAppState}
            />
          )}
        />

        <Route
          exact
          path="/startupdashboard"
          render={(props) => (
            <StartUpDashboard
              {...this.state}
              {...this.props}
              setDisplayStartupEval={this.setDisplayStartupEval}
              {...props}
              user={this.state.user}
              type={this.type}
            />
          )}
        />

        <Route
          exact
          path="/startups"
          render={(props) => <StartUpList {...props} />}
        />

        <Route
          exact
          path="/startup/profile"
          render={(props) => (
            <StartUpProfile
              user={this.state.user}
              setUser={this.setUser}
              setAppState={this.props.setAppState}
              {...props}
            />
          )}
        />

        <Route exact path="/startup/:id" component={StartUpDetails} />

        <Route
          exact
          path="/investor/profile"
          render={(props) => (
            <InvestorProfile
              type={this.state.type}
              user={this.state.user}
              setUser={this.setUser}
              setAppState={this.props.setAppState}
              {...props}
            />
          )}
        />
        {/* I wanted to put this one in the Invst Dashboard but didn't work */}
        <Route
          exact
          path="/startuplist"
          render={(props) => <StartUpList user={this.state.user} {...props} />}
<<<<<<< HEAD:server/client/src/components/RouteContainer.js
        />

=======
        /> */}
>>>>>>> ebc9a36e4f10bdc34da19f1ac4cbc972c8762703:client/src/components/RouteContainer.js
      </div>
    );
  }
}
