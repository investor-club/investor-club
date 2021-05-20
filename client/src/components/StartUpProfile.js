import React from "react";
import axios from "axios";
import StartUpEdit from "./StartUpEdit";
import "./StartUpProfile.css";

export default class StartUpProfile extends React.Component {
  state = {
    user: this.props.user,
    error: null,
    editForm: false,
    username: this.props.username,
    email: this.props.email,
    password: this.props.password,
    companyName: this.props.companyName,
    statement: this.props.statement,
    description: this.props.description,
    place: this.props.place,
    industry: this.props.industry,
    stage: this.props.stage,
    foundation: this.props.foundation,
    teamMembers: this.props.teamMembers,
    skillsI: this.props.skillsI,
    skillsII: this.props.skillsII,
    skillsIII: this.props.skillsIII,
    experience: this.props.experience,
    pitchDeck: this.props.pitchDeck,
  };

  getData = () => {
    axios
      .get(`/api/startups/${this.props.user._id}`)
      .then((response) => {
        console.log("response data", response.data);
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
          pitchDeck: response.data.pitchDeck,
        });
      })
      .catch((err) => console.log(err));
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
        pitchDeck: this.state.pitchDeck,
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
          pitchDeck: response.data.pitchDeck,
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
      <div className="startup-container">
        <div className="main-container">
          <div className="left-side">
            <h2>Hello {this.state.username}</h2>
            <h3>{this.state.companyName}</h3>
            <h4>{this.state.industry}</h4>
            <textarea
              name="bio"
              id="bio"
              cols="20"
              rows="10"
              value={this.state.description}
            ></textarea>
            <h4>{this.state.place}</h4>
            <div className="social-links">
              <a href="#">companywebsite.com</a>
              <a href="#">PitchDeck</a>
            </div>
          </div>
          <div className="right-side">
            <h3 className="score">
              Startup Score <span>5/6</span>
            </h3>
            <hr />
            <div className="top">
              <div className="top-detail">
                <h4>Team</h4>
                <h4>{this.state.teamMembers}</h4>
              </div>
              <div className="top-detail">
                <h4>Skills I</h4>
                <h4>{this.state.skillsI}</h4>
              </div>
              <div className="top-detail">
                <h4>Skills II</h4>
                <h4>{this.state.skillsII}</h4>
              </div>
              <div className="top-detail">
                <h4>Pitch Deck</h4>
                <h4>{this.state.pitchDeck}</h4>
              </div>
            </div>
            <h3 className="overview">Overview</h3>
            <hr />
            <div className="bottom">
              <div className="bot-left">
                <div className="bot-detail">
                  <h4>
                    Team <span>{this.state.teamMembers}</span>
                  </h4>
                  <h4>
                    Skills in team <span>{this.state.skillsIII}</span>
                  </h4>
                  <h4>
                    Experience <span>{this.state.skillsIII}</span>
                  </h4>
                </div>
              </div>
              <div className="bot-right">
                <div className="bot-detail">
                  <h4>
                    All skills available <span>{this.state.skillsIII}</span>
                  </h4>
                  <h4>
                    Skills missing <span>{this.state.experience}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="edit-form">
          <button onClick={this.toggleEditForm}>Show Edit Form</button>
          {this.state.editForm && (
            <StartUpEdit
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              user={this.props.user}
              {...this.state}
            />
          )}
        </div>
      </div>
    );
  }
}
