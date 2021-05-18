import React, { Component } from "react";

export default class EditProject extends Component {
  render() {
    return (
      <div>
        <h2>Edit Profile</h2>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.props.username}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.props.password}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={this.props.firstName}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={this.props.lastName}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="industry">Industry: </label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={this.props.industry}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="bio">Bio: </label>
          <input
            type="text"
            id="bio"
            name="bio"
            value={this.props.bio}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="location"
            name="location"
            value={this.props.location}
            onChange={this.props.handleChange}
          />
          <br />
          <button type="submit">Update Profile</button>
        </form>
      </div>
    );
  }
}
