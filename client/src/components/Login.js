import React, { Component } from "react";
import { login } from "../services/auth";
import "./Login.css";

export default class Login extends Component {
  state = {
    user: {},
    type: "",
    username: "",
    password: "",
    message: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    login(username, password).then((response) => {
      console.log("LOGIN: ", response);
      if (response.message) {
        this.setState({
          message: response.message,
          username: "",
          password: "",
          type: "",
        });
      } else {
        //console.log(user, this.props.type);
        // this.props.setUser(response.user);
        // this.props.setType(response.type);
        this.props.setAppState(response.user, response.type);
        if (response.type === "startup") {
          this.props.history.push("/startupdashboard");
        }
        if (response.type === "investor") {
          this.props.history.push("/investordashboard");
        }
      }
    });
  };
  render() {
    return (
      <div className="signup-login">
        <div className="left-part">
          <div className="image-container"> </div>
        </div>
        <div className="right-part">
          <div className="login-container">
            <h2>Log In</h2>
            <div class="login-detail">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  id="username"
                />
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="password"
                />
                <div>
                  <button type="submit" className="form-button">
                    Log In
                  </button>
                </div>
                {this.state.message && <h3>{this.state.message}</h3>}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
