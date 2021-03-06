import React, { Component } from "react";
import axios from "axios";
import EditInvestor from "./EditInvestor";
import {service} from "../services/service";
import "./InvestorProfile.css";
import pin from "../public/pin1.svg";

export default class InvestorProfile extends Component {
  state = {
    error: null,
    editForm: false,
    username: this.props.user.username,
    email: this.props.user.email,
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
        this.setState({
          username: response.data.username,
          email: response.data.email,
          password: response.data.password,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          industry: response.data.industry,
          bio: response.data.bio,
          location: response.data.location,
          imageUrl: response.data.imageUrl,
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
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('imageUrl', e.target.files[0]);
 
    service
      .handleInvestorUpload(uploadData, this.props.user._id)
      .then(response => {
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    service
      .saveNewThing(this.state, this.props.user._id)
      .then(res => {
        this.setState({ 
          username: res.investor.username,
          firstName: res.investor.firstName,
        });
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
      <div>
        <div className="purpleBackground"></div>
        <div className="bodyPadding" className="sideBySide bodyDiv">
        
          <div className="image-cropper">
            <img src={this.state.imageUrl} alt="investor-profile" className="profile-pic"/>
          </div>

          <div className="textRight">
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <div className="sideBySide">
                <div> <img id="pin" src={pin} alt="pin" /></div>
                <div><p>{this.state.location}</p></div>
            </div>
            <hr className="hrInvestorProfile"/>

            <h3>Industry: {this.state.industry}</h3>
            <h3>Location: {this.state.location}</h3>
            <h3>About me </h3>
            <h3>{this.state.bio}</h3>
            <h3 className="purple">{this.state.email}</h3>
            <button onClick={this.toggleEditForm} className="info-Container">Edit</button>

          </div>
          <div className="editDiv">
          {this.state.editForm && (
            <EditInvestor
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleFileUpload={this.handleFileUpload}
              {...this.state}
            />
          )}

          </div>

        </div>
          <div>
         
          </div>
       
      </div>
    );
  }
}
