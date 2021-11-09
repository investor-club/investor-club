import React, { Component } from "react";
import { signUpInvestor } from "../services/auth";
import "./Login.css";

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
    
    signUpInvestor(email, username, password, firstName, lastName).then(
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
          this.props.setUser(user);
          this.props.history.push("/login");
        }
      }
    );
  };

  render() {
    return (
      <div className="signup-login">
        <div className="left-part">
          <div className="image-container"> </div>
        </div>
        <div className="right-part">
          <div className="login-container">
            <h2>Signup</h2>
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              id="firstName"
            />
            <br />

            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              id="lastName"
            />
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
                <div>
                  <button type="submit" className="form-button">
                    Create account
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
