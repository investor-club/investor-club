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
import StartUpDashboard from "./StartUpDashboard";
//import ProtectedRoute from './components/ProtectedRoute';

export default class RouteContainer extends React.Component {
  state = {
    displayStartupEval: true,
  };

  setUser = (user) => {
    this.setState({ user });
  };

  setDisplayStartupEval = (displayStartupEval) => {
    this.setState({
      displayStartupEval: displayStartupEval,
    });
  };

  render() {
   // console.log("AM I YOUR TYPE ?", this.props.type) //PROBLEMATIC
     /* if not logged in then gneric home page */
    let result;
    if (!this.state.type) {
       result = <LandingPage />  // REMOVE ON SIGNUP!!
    // if logged in as startup: 
    } else if (this.state.type==="startup") {   //ONLY ON FIRST!!!
     result = <StartUpEvaluation
        user = {this.state.user}
        type = {this.state.type}
        setDisplayStartupEval = {this.setDisplayStartupEval}
        displayStartupEval={this.state.displayStartupEval}
      /> 
    } else if (this.state.type==="investor") {
      result = 
      <Route 
        exact path="/investordashboard"
        render={props => <InvestorDashboard {...props} 
      />}
    />
             }

    return (
      <div>
        {/* the below is for the landng page logiv  */}
        <div>
            {result}
         </div>
        {/* we need routes for almost all component */}

        {/* navbar */}
        {/* <ProtectedRoute 
          // path=''
          // user={this.state.user}
          // component={Projects}
          // redirectPath='/login'
        /> */}
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
          render={(props) => <Login setUser={this.setUser} updateState={this.props.updateState} {...props} />}
        />
        
        {/* <Route 
          exact path="/investordashboard"
          render={props => <InvestorDashboard {...props} />}
        /> */}

        <Route 
          exact path="/startupdashboard"
          render={props => <StartUpDashboard {...props} />}
        />

        <Route 
          exact path="/startups"
          render={props => <StartUpList {...props} />}
        />

  
        
      </div>
    );
  }
}
