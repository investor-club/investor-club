import React, { Component } from "react";
import { signUpInvestor } from "../services/auth";

export default class SignUpInvestor extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
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
    const { firstName, lastName, username, email, password } = this.state;
    signUpInvestor(firstName, lastName, username, email, password).then(
      (user) => {
        if (user.message) {
          this.setState({
            message: user.message,
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
          });
        } else {
          console.log(user);
          this.props.setUser(user);
        }
      }
    );
  };

  render() {
    return (
      <div>
        <h2>Signup</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            id="firstName"
          />

          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            id="lastName"
          />

          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
          />

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            id="email"
          />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
          />

          <button type="submit">Sign Up</button>
          {this.state.message && <h3>{this.state.message}</h3>}
        </form>
      </div>
    );
  }
}
