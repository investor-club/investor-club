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
    login(username, password).then((response) => {
      console.log("LOGIN: ",response.type)
      if (response.message) {
        this.setState({
          message: response.message,
          username: "",
          password: "",
          type: ""
        });
      } else {
        //console.log(user, this.props.type);
        this.props.setUser(response.user);
        this.props.setType(response.type);
        this.props.setAppState({user: response.user, type: response.type})
        if (response.type==="startup") { 
          this.props.history.push("/startupdashboard");}
        if (response.type==="investor"){
          this.props.history.push("/investordashboard");}

      }
    });
  };
  render() {
    return (
      <div class='bodyPadding'>
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
          <button type="submit">Log in</button>
          {this.state.message && <h3>{this.state.message}</h3>}
        </form>
      </div>
    );
  }
}
