import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import RouteContainer from "./components/RouteContainer";


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar user={this.props.user} type={this.props.type}/>
        <RouteContainer user={this.props.user} type={this.props.type}/>
      </div>
    )
  }
}
