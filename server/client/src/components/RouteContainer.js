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
import axios from "axios";

export default class RouteContainer extends React.Component {
  state = {
    user: this.props.user,
    displayStartupEval: true,
    type: this.props.type
  };

  setUser = (user) => {
    this.setState({ user });
  };
  setType = (type) => {
    this.setState({ type });
  };
  
  setDisplayStartupEval = (displayStartupEval) => {
    this.setState({
      displayStartupEval: displayStartupEval,
    });
  };

  

  render() {
  
     console.log("I AM TYPE IN ROUTECONTAINER", this.type) 

    return (
      <div>
      
        <Route
          exact
          path="/signupchoice"
          render={(props) => (
            <SignUpChoice setUser={this.setUser} {...props} />
          )}
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
          render={(props) => (<SignUpStartUp setUser={this.setUser} {...props} />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} setType={this.setType} setAppState={this.props.setAppState} {...props} />}
        />
        
        <Route 
          exact path="/investordashboard"
          render={props => <InvestorDashboard {...props} user= {this.state.user} type={this.type}/>}
        />

        <Route 
          exact path="/startupdashboard"
          render={props => <StartUpDashboard {...props} user= {this.state.user} type={this.type}/>}
        />

        <Route 
          exact path="/startups"
          render={props => <StartUpList {...props} />}
        />
        <Route
            exact path="/startup/profile/:id"
            render={props => <StartUpProfile user={this.state.user} setUser={this.setUser} {...props} />}
        />

        <Route
            exact path="/investor/profile/:id"
            render={props => <StartUpProfile user={this.state.user} setUser={this.setUser} {...props} />}
        />
        <Route
            exact path="/startuplist"
            render={props => <StartUpList user={this.state.user} {...props} />}
        />
        
      </div>
    );
  }
}
