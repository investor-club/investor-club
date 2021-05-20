import React from "react";
import SignUpChoice from "./SignUpChoice";
import { Route } from "react-router-dom";
import Login from "./Login";
import SignUpInvestor from "./SignUpInvestor";
import SignUpStartUp from "./SignUpStartUp";
import StartUpList from "./StartUpList";
import InvestorList from "./InvestorList";
import InvestorDashboard from "./InvestorDashboard";
import StartUpProfile from "./StartUpProfile";
import StartUpDashboard from "./StartUpDashboard";
import LandingPage from "./LandingPage";
import InvestorProfile from "./InvestorProfile";
import StartUpDetails from "./StartupDetails";
import Favourites from "./Favourites";
import Portfolio from "./Portfolio";
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
  setPortfolio = (startup) => {
    this.setState((state) =>  ({
      user: {
        ...state.user,
        inPortfolio: [...state.user.inPortfolio, startup],
      }
  }));;
  };

  render() {
    console.log("I AM USER IN ROUTECONTAINER", this.state.user);
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
          path="/portfolio"
          render={(props) => (
            <Portfolio
              {...props}
              user={this.state.user}
              type={this.state.type}
            />
          )}
        />

        <Route
          exact
          path="/favourites"
          render={(props) => (
            <Favourites
              {...props}
              user={this.state.user}
              type={this.state.type}
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
              // {...props}
              // user={this.state.user}
              // type={this.state.type}
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

        <Route exact path="/onestartup/:id" component={StartUpDetails} />

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
        <Route
          exact
          path="/startuplist"
          render={(props) => <StartUpList user={this.state.user} {...props} />}
        />

        <Route
          exact
          path="/startupdetails"
          render={(props) => <StartUpDetails user={this.state.user} {...props} />}
        />  

        <Route
          exact
          path="/investorlist"
          render={(props) => <InvestorList user={this.state.user} {...props} />} 
        />  
      </div>
    );
  }
}
