import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import RouteContainer from "./components/RouteContainer";
import axios from "axios";
import Footer from "./components/Footer";

export default class App extends React.Component {
  state = {
    user: this.props.user,
    type: this.props.type,
    landing: true,
  };

  //passing down as a prop -> check for redundancy
  setAppState = (user, type) => {
    this.setState({ user, type });
  };

  componentDidMount() {
    axios
      .get("/api/auth/loggedin")
      .then((response) => {
        this.setState({ user: response.data.user, type: response.data.type });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar
          setAppState={this.setAppState}
          user={this.state.user}
          type={this.state.type}
        />

        <RouteContainer
          user={this.state.user}
          setAppState={this.setAppState}
          type={this.state.type}
        />
        {/* <Footer></Footer> */}
      </div>
    );
  }
}
