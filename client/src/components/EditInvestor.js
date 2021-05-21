import React, { Component } from "react";
import service from "../services/service";
import "./InvestorProfile.css"

export default class EditProject extends Component {
  render() {
    return (
      <div className="edit-container">
        <form onSubmit={this.props.handleSubmit}>

         
          <input 
            type="file" 
            onChange={e => this.props.handleFileUpload(e)} />

          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.props.username}
            onChange={this.props.handleChange}
          />

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />

          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={this.props.firstName}
            onChange={this.props.handleChange}
          />

          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={this.props.lastName}
            onChange={this.props.handleChange}
          />

          <label htmlFor="industry">Industry: </label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={this.props.industry}
            onChange={this.props.handleChange}
          />

          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="location"
            name="location"
            value={this.props.location}
            onChange={this.props.handleChange}
          />

          <label htmlFor="bio">Bio: </label>
          <textarea
            rows="10"
            cols="30"
            type="text"
            id="bio"
            name="bio"
            value={this.props.bio}
            onChange={this.props.handleChange}
          />

          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}
