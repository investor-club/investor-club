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
import StartUpProfile from "./StartUpProfile";
import StartUpDashboard from "./StartUpDashboard";

export default class RouteContainer extends React.Component {
  state = {
    user: this.props.user,
    displayStartupEval: true,
    type: this.props.type
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
  
     console.log("I AM TYPE IN ROUTECONTAINER", this.props.type) 
     
     let result;
     if (!this.state.user) {
     result = <LandingPage />  // REMOVE ON SIGNUP!!
     // if logged in as startup: 
     } else if (this.state.type==="startup") {   //ONLY ON FIRST!!!
        result =  <StartUpDashboard />   
        //   <Route 
        //   exact path="/startupdashboard"
        //   render={ props => <StartupDashboard {...props} type={this.props} />}
        // />    
     } else if (this.state.type ==="investor") {
       result = <InvestorDashboard />
        // <Route 
        //     exact path="/investordashboard"
        //     render={props => <InvestorDashboard {...props} type={this.props} />}
        // />    
     }

    return (
      <div>
      
        <div>
            {result}
         </div>
    
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
        
        <Route 
          exact path="/investordashboard/:id"
          render={props => <InvestorDashboard {...props} type={this.props.type}/>}
        />

        <Route 
          exact path="/startupdashboard/:id"
          render={props => <StartUpDashboard {...props} type={this.props.type}/>}
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
        
      </div>
    );
  }
}
