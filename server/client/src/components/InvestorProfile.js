import React, { Component } from "react";
import axios from "axios";
import EditInvestor from "./EditInvestor";

export default class InvestorProfile extends Component {
  state = {
    error: null,
    editForm: false,
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    industry: "",
    bio: "",
    location: "",
  };

  getData = () => {
    axios
      .get(`/api/investors/${this.props.user._id}`)
      .then((response) => {
        console.log("investor profile: ", response);
        this.setState({
          username: response.data.username,
          email: response.data.email,
          password: response.data.password,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          industry: response.data.industry,
          bio: response.data.bio,
          location: response.data.location,
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          this.setState({
            error: "Page Not Found...",
          });
        }
      });
  };

  componentDidMount() {
    this.getData();
    console.log("hello from did mount");
  }

  toggleEditForm = () => {
    this.setState((prevState) => ({
      editForm: !prevState.editForm,
    }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("update");
    axios
      .put(`/api/investors/${this.props.user._id}`, {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        industry: this.state.industry,
        bio: this.state.bio,
        location: this.state.location,
      })
      .then((response) => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
          password: response.data.password,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          industry: response.data.industry,
          bio: response.data.bio,
          location: response.data.location,
          editForm: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.error) return <h3>{this.state.error}</h3>;
    return (
      <div>
        <h1>Hello {this.state.username}</h1>
        <button onClick={this.toggleEditForm}>Show Edit Form</button>
        {this.state.editForm && (
          <EditInvestor
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state}
          />
        )}
      </div>
    );
  }
}
