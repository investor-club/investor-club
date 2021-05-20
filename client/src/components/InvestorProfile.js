import React, { Component } from "react";
import axios from "axios";
import EditInvestor from "./EditInvestor";
import service from "../services/service";
import "./InvestorProfile.css";

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
    imageUrl: "",
    imageName: "",
    imageDescription: "",
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

  handleFileUpload = e => {
    
    console.log('The file to be uploaded is: ', e.target.files[0]);
 
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('imageUrl', e.target.files[0]);
 
    service
      .handleInvestorUpload(uploadData, this.props.user._id)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        console.log("response",response)
        // console.log("response.secure_ur",response.secure_url)
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("update");

    service
      .saveNewThing(this.state, this.props.user._id)
      .then(res => {
        console.log('added: ', res);
        // here you would redirect to some other page
      })
      .catch(err => {
        console.log('Error while adding the thing: ', err);
      });
  
    axios
      .put(`/api/investors/${this.props.user._id}`, {
        imageUrl: this.state.imageUrl,
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
          imageUrl: this.state.imageUrl,
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
      <div className="info-container">
        <img src={this.state.imageUrl} alt="investor profile picture"/>
        <h3>Username: {this.state.username}</h3>
        <h3>Email: {this.state.email}</h3>
        <h3>First Name: {this.state.firstName}</h3>
        <h3>Last Name: {this.state.lastName}</h3>
        <h3>Industry: {this.state.industry}</h3>
        <h3>Location: {this.state.location}</h3>
        <h3>Bio: </h3>
        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="10"
          value={this.state.bio}
        ></textarea>
        <button onClick={this.toggleEditForm}>Edit</button>
        {this.state.editForm && (
          <EditInvestor
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleFileUpload={this.handleFileUpload}
            {...this.state}
          />
        )}
      </div>
    );
  }
}
