import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import RouteContainer from "./components/RouteContainer";
import StartUpEvaluation from "./components/StartUpEvaluation";
import StartUpDashboard from "./components/StartUpDashboard";
import InvestorDashboard from "./components/InvestorDashboard";
import axios from "axios";


export default class App extends React.Component {

  state ={
    user: this.props.user,
    type: this.props.type
  }

  updateState = (user, type) => {
    this.setState({user, type})
  }

  componentDidMount () {
    axios
        .get("/api/auth/loggedin")
        .then((response) => {
            const session = response.data;
            console.log("AXIOS RESPONSE ", response.data);
            this.setState({type: response.data.type})
        })
        .catch((err) => {
            console.log(err);
        });
}

  render() {
    console.log("I AM TYPE IN APP", this.props.type)
    return (
      <div className="App">
        <NavBar user={this.props.user} updateState={this.updateState} type={this.state.type}/>
        <RouteContainer user={this.props.user} updateState={this.updateState} type={this.props.type}/>
      </div>
    )
  }
}
