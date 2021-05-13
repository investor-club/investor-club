import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import RouteContainer from "./components/RouteContainer";


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <RouteContainer />
      </div>
    )
  }
}
