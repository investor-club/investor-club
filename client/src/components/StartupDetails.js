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
      <div className="main-container">
        <div className="left-side">
          <h2>Hello {this.state.user.username}</h2>
          <h3>{this.state.user.companyName}</h3>
          <h4>{this.state.user.industry}</h4>
          <textarea
            name="bio"
            id="bio"
            cols="20"
            rows="10"
            value={this.state.user.description}
          ></textarea>
          <h4>{this.state.user.place}</h4>
          <div className="social-links">
            <a>companywebsite.com</a>
            <a>PitchDeck</a>
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
              <h4>{this.state.user.teamMembers}</h4>
            </div>
            <div className="top-detail">
              <h4>Skills I</h4>
              <h4>{this.state.user.skillsI}</h4>
            </div>
            <div className="top-detail">
              <h4>Skills II</h4>
              <h4>{this.state.user.skillsII}</h4>
            </div>
            <div className="top-detail">
              <h4>Pitch Deck</h4>
              <h4>{this.state.user.pitchDeck}</h4>
            </div>
          </div>
          <h3 className="overview">Overview</h3>
          <hr />
          <div className="bottom">
              <div className="bot-left">
                <div className="bot-detail">
                  <h4>
                    Team <span>{this.state.user.teamMembers}</span>
                  </h4>
                  <h4>
                    Has all necessary skills: <span>{this.state.user.skillsII}</span>
                  </h4>
                  <h4>
                    Experience <span>{this.state.user.experience}</span>
                  </h4>
                </div>
              </div>
              <div className="bot-right">
                <div className="bot-detail">
                  <h4>
                    Skills available { this.state.user.skillsI.map(a => {return (<span>{a} </span>) } ) }
                  </h4>
                  <h4>
                    Skills missing { this.state.user.skillsIII.map(a => {return (<span> {a} </span>) } ) }
                  </h4>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
