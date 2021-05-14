import React from "react";
import StartUpEvaluation from "./StartUpEvaluation";
import SignUpChoice from "./SignUpChoice";
import { Route } from "react-router-dom";
import Login from "./Login";
import SignUpInvestor from "./SignUpInvestor";
import SignUpStartUp from "./SignUpStartUp";
import StartUpList from "./StartUpList";
import InvestorDashboard from "./InvestorDashboard";
import LandingPage from "./LandingPage";


export default class RouteContainer extends React.Component {
  state = {
    user: this.props.user,
    displayStartupEval: true,
    type: this.props.type,
  };

  setUser = (user) => {
    this.setState({ user });
  };

  setDisplayStartupEval = (displayStartupEval) => {
      this.setState({ 
          displayStartupEval: displayStartupEval})
  }

  render() {

     /* if not logged in then gneric home page */
     let result;
    if (!this.state.type) {
       result = <LandingPage />  // REMOVE ON SIGNUP!!
    // if logged in as startup: 
    } else if (this.state.type==="startup") {
     result = <StartUpEvaluation
        user = {this.state.user}
        type = {this.state.type}
        setDisplayStartupEval = {this.setDisplayStartupEval}
        displayStartupEval={this.state.displayStartupEval}
      /> 
    } else if (this.state.type==="investor") {
      result = <InvestorDashboard user={this.state.user} />
             }

    return (
      <div>
        <h1>Hello from RouteContainer</h1>

        {/* the below is for the landng page logiv  */}
         <div>
            {result}
         </div>


        <SignUpChoice />

        {/* we need routes for almost all component */}
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
          exact path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />
        {/* this will be the if / else logic  of te protected routes*/}
        <Route 
          exact path="/startups"
          render={props => <StartUpList {...props} />}
        />
        
      </div>
    );
  }
}
