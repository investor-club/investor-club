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
      <div className="detail-container">
        <div className="main-info">
          <img src="#" alt="company image" />
          <h3>{this.state.companyName}</h3>
          <h4>{this.state.industry}</h4>
          <p>{this.state.description}</p>
          <p>{this.state.place}</p>
          <div className="social-links">
            <a href="#">Company Website</a>
            <a href="#">Company PitchDeck</a>
          </div>
        </div>

        <div className="secondary-info">
          <div className="score-info">
            <h4>Startup Score 5/6</h4>
            <hr />
            <div className="score-details">
              <div className="details-df">
                <h5>Team</h5>
                <p>{this.state.teamMembers}</p>
              </div>
              <div className="details-df">
                <h5>Skills I</h5>
                <p>{this.state.skillsI}</p>
              </div>
              <div className="details-df">
                <h5>Skills II</h5>
                <p>{this.state.skillsII}</p>
              </div>
              <div className="details-df">
                <h5>Skills III</h5>
                <p>{this.state.skillsIII}</p>
              </div>
              <div className="details-df">
                <h5>Pitch Deck</h5>
                <p>{this.state.pitchDeck}</p>
              </div>
            </div>
          </div>
          <div className="overview-info">
            <h4>Overview</h4>
            <hr />
            <div className="overview">
              <div className="overview-detail">
                <h5>Team</h5>
                <h5>{this.state.teamMembers}</h5>
              </div>
              <div className="overview-detail">
                <h5>Skills in team</h5>
                <div className="flex-helper">
                  <h5>{this.state.skillsI}/</h5>
                  <h5>{this.state.skillsII}</h5>
                </div>
              </div>
              <div className="overview-detail">
                <h5>All skills available</h5>
                <div className="flex-helper">
                  <h5>{this.state.skillsIII}</h5>
                </div>
              </div>
              <div className="overview-detail">
                <h5>Skills missing</h5>
                <div className="flex-helper">
                  <h5>{this.state.teamMembers}</h5>
                </div>
              </div>
              <div className="overview-detail">
                <h5>Experience</h5>
                <h5>{this.state.experience}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
