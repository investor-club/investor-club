import React from "react";
import axios from "axios";
import StartUpEdit from "./StartUpEdit";

export default class StartUpProfile extends React.Component {
  state = {
    error: null,
    editForm: false,
    username: "",
    email: "",
    password: "",
    companyName: "",
    statement: "",
    description: "",
    place: "",
    industry: "",
    stage: "",
    foundation: "",
    teamMembers: "",
    skillsI: "",
    skillsII: "",
    skillsIII: "",
    experience: "",
  };

  getData = () => {
    axios
      .get(`/api/startups/${this.props.user._id}`)
      .then((response) => {
        console.log("component did mount response data", response.data);
        this.setState({
          username: response.data.username,
          email: response.data.email,
          password: response.data.password,
          companyName: response.data.companyName,
          statement: response.data.statement,
          description: response.data.description,
          place: response.data.place,
          industry: response.data.industry,
          stage: response.data.stage,
          foundation: response.data.foundation,
          teamMembers: response.data.teamMembers,
          skillsI: response.data.skillsI,
          skillsII: response.data.skillsII,
          skillsIII: response.data.skillsIII,
          experience: response.data.experience,
        });
      })
      .catch((err) => console.log(err));
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
      .put(`/api/startups/${this.props.user._id}`, {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        companyName: this.state.companyName,
        statement: this.state.statement,
        description: this.state.description,
        place: this.state.place,
        industry: this.state.industry,
        stage: this.state.stage,
        foundation: this.state.foundation,
        teamMembers: this.state.teamMembers,
        skillsI: this.state.skillsI,
        skillsII: this.state.skillsII,
        skillsIII: this.state.skillsIII,
        experience: this.state.experience,
      })
      .then((response) => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
          password: response.data.password,
          companyName: response.data.companyName,
          statement: response.data.statement,
          description: response.data.description,
          place: response.data.place,
          industry: response.data.industry,
          stage: response.data.stage,
          foundation: response.data.foundation,
          teamMembers: response.data.teamMembers,
          skillsI: response.data.skillsI,
          skillsII: response.data.skillsII,
          skillsIII: response.data.skillsIII,
          experience: response.data.experience,
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
        <h1>username: {this.state.username}</h1>
        <br />
        <h1>email: {this.state.email}</h1>
        <br />
        <h1>password: {this.state.password}</h1>
        <br />
        <h1>companyName: {this.state.companyName}</h1>
        <br />
        <h1>statement: {this.state.statement}</h1>
        <br />
        <h1>description: {this.state.description}</h1>
        <br />
        <h1>place {this.state.place}</h1>
        <br />
        <h1>industry: {this.state.industry}</h1>
        <br />
        <h1>stage: {this.state.stage}</h1>
        <br />
        <h1>foundation: {this.state.foundation}</h1>
        <br />
        <h1>teamMembers: {this.state.teamMembers}</h1>
        <br />
        <h1>skillsI: {this.state.skillsI}</h1>
        <br />
        <h1>skillsII: {this.state.skillsII}</h1>
        <br />
        <h1>skillsIII: {this.state.skillsIII}</h1>
        <br />
        <h1>experience: {this.state.experience}</h1>
        <br />
        <button onClick={this.toggleEditForm}>Show Edit Form</button>
        {this.state.editForm && (
          <StartUpEdit
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state}
          />
        )}
      </div>
    );
  }
}
