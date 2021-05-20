import React, { Component } from "react";
import axios from "axios";
import "./StartupDetails.css";

export default class StartupDetails extends Component {
  state = { 
    user: this.props.user
  };

  getStartupDetails = () => {
    axios
      .get(`/api/startups/${this.props.match.params.id}`)
      .then((response) => {
        console.log("STARTUP DETAILS RESPONSE", response.data);
        this.setState({
          user: response.data
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
          <h3>{this.state.user.companyName}</h3>
          <h4>{this.state.user.industry}</h4>
          <p>{this.state.user.description}</p>
          <p>{this.state.user.place}</p>
          <div className="social-links">
            <a href="#">Company Website</a>
            <a href="#">Company PitchDeck</a>
          </div>
        </div>

        <div className="secondary-info">
          <div className="score-info">
            <h4>Startup Rating {this.state.user.rating}</h4>
            <hr />
            <div className="score-details">
              <div className="details-df">
                <h5>Team</h5>
                <p>{this.state.user.teamMembers}</p>
              </div>
              <div className="details-df">
                <h5>Skills I</h5>
                <p>{this.state.user.skillsI}</p>
              </div>
              <div className="details-df">
                <h5>Skills II</h5>
                <p>{this.state.user.skillsII}</p>
              </div>
              <div className="details-df">
                <h5>Skills III</h5>
                <p>{this.state.user.skillsIII}</p>
              </div>
              <div className="details-df">
                <h5>Pitch Deck</h5>
                <p>{this.state.user.pitchDeck}</p>
              </div>
            </div>
          </div>
          <div className="overview-info">
            <h4>Overview</h4>
            <hr />
            <div className="overview">
              <div className="overview-detail">
                <h5>Team</h5>
                <h5>{this.state.user.teamMembers}</h5>
              </div>
              <div className="overview-detail">
                <h5>Skills in team</h5>
                <div className="flex-helper">
                  <h5>{this.state.user.skillsI}/</h5>
                  <h5>{this.state.user.skillsII}</h5>
                </div>
              </div>
              <div className="overview-detail">
                <h5>All skills available</h5>
                <div className="flex-helper">
                  <h5>{this.state.user.skillsIII}</h5>
                </div>
              </div>
              <div className="overview-detail">
                <h5>Skills missing</h5>
                <div className="flex-helper">
                  <h5>{this.state.user.teamMembers}</h5>
                </div>
              </div>
              <div className="overview-detail">
                <h5>Experience</h5>
                <h5>{this.state.user.experience}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
