import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import RouteContainer from "./components/RouteContainer";
import StartUpEvaluation from "./components/StartUpEvaluation";
import StartUpDashboard from "./components/StartUpDashboard";
import InvestorDashboard from "./components/InvestorDashboard";


export default class App extends React.Component {
  render() {
    // let result;
    // if (!this.state.type) {
    //    result = <LandingPage />  // REMOVE ON SIGNUP!!
    // // if logged in as startup: 
    // } else if (this.state.type==="startup") {
    //  result = <StartUpEvaluation
    //     user = {this.state.user}
    //     type = {this.state.type}
    //     setDisplayStartupEval = {this.setDisplayStartupEval}
    //     displayStartupEval={this.state.displayStartupEval}
    //   /> 
    // } else if (this.state.type==="investor") {
    //   result = <InvestorDashboard user={this.state.user} />
    //          }

    return (
      <div className="App">
        {/* <div>
            {result}
        </div> */}
        <NavBar user={this.props.user} type={this.props.type}/>
        <RouteContainer user={this.props.user} type={this.props.type}/>
      </div>
    )
  }
}
