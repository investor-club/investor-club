import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import RouteContainer from "./components/RouteContainer";
import StartUpEvaluation from "./components/StartUpEvaluation";
import StartUpDashboard from "./components/StartUpDashboard";
import InvestorDashboard from "./components/InvestorDashboard";


export default class App extends React.Component {

  state ={
    user: this.props.user,
    type: this.props.type
  }

  updateState = (user, type) => {
    this.setState({user, type})
  }

  render() {
    console.log("AM I YOUR TYPE ?", this.state.type)
    return (
      <div className="App">
        <NavBar user={this.state.user} updateState={this.updateState} type={this.state.type}/>
        <RouteContainer user={this.state.user} updateState={this.updateState} type={this.state.type}/>
      </div>
    )
  }
}
