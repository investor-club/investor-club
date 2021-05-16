import React, { Component } from "react";
import { login } from "../services/auth";

export default class Login extends Component {
  state = {
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
    login(username, password).then((user) => {
      if (user.message) {
        this.setState({
          message: user.message,
          username: "",
          password: "",
        });
      } else {
        console.log(user, this.props.type);
        this.props.setUser(user);
        this.props.updateState(user, this.props.type) //?????
        if (this.props.type === "investor") {
          this.props.history.push("/investordashboard");
        }
        if (this.props.type === "startup") {
          this.props.history.push("/startupdashboard");
        }
      }
    });
  };
  render() {
    return (
      <div>
        <h2>Login</h2>
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
          <button type="submit">Log in</button>
          {this.state.message && <h3>{this.state.message}</h3>}
        </form>
      </div>
    );
  }
}
