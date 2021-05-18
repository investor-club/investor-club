import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import RouteContainer from "./components/RouteContainer";
import LandingPage from "./components/LandingPage";
import axios from "axios";

export default class App extends React.Component {
  state = {
    user: this.props.user,
    type: this.props.type,
  };

  setAppState = (user, type) => {
    this.setState({ user });
    this.setState({ type });
  };

  componentDidMount() {
    axios
      .get("/api/auth/loggedin")
      .then((response) => {
        console.log("AXIOS RESPONSE ", response.data);
        this.setState({ user: response.data.user, type: response.data.type });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log("I AM TYPE IN APP", this.state.type);

    let landing;
    if (!this.state.user) {
      landing = <LandingPage />;
    }

    return (
      <div className="App">
        <NavBar
          setAppState={this.setAppState}
          user={this.state.user}
          type={this.state.type}
        />
        {landing}
        <RouteContainer
          user={this.state.user}
          setAppState={this.setAppState}
          type={this.state.type}
        />
      </div>
    );
  }
}
