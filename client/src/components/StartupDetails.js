import React, { Component } from "react";
import axios from "axios";
import "./StartupDetails.css";

export default class StartupDetails extends Component {
  state = {
    email: "",
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
    pitchDeck: "",
  };

  getStartupDetails = () => {
    axios
      .get(`/api/startups/${this.props.match.params.id}`)
      .then((response) => {
        console.log("component did mount response data", response.data);
        this.setState({
          email: response.data.email,
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
    this.getStartupDetails();
  }

  render() {
    return (
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
    );
  }
}
