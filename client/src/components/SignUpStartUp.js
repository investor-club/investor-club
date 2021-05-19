import React, { Component } from "react";
import { signUpStartUp } from "../services/auth";

export default class SignUpStartUp extends Component {
  state = {
    companyName: "",
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
    const { companyName, username, email, password } = this.state;
    signUpStartUp(companyName, email, username, password).then((user) => {
      if (user.message) {
        this.setState({
          message: user.message,
          companyName: "",
          username: "",
          email: "",
          password: "",
        });
      } else {
        console.log(user);
        this.props.setUser(user);
        this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <div class='bodyPadding'>
        <h2>Signup</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="companyName">Company Name: </label>
          <input
            type="text"
            name="companyName"
            value={this.state.companyName}
            onChange={this.handleChange}
            id="companyName"
          />
          <br/>

          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
          />
          <br/>

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            id="email"
          />
          <br/>

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
          />
          <br/>

          <button type="submit">Sign Up</button>
          {this.state.message && <h3>{this.state.message}</h3>}
        </form>
      </div>
    );
  }
}