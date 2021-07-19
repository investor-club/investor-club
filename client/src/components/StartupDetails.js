import React, { Component } from "react";
import axios from "axios";
import "./StartupDetails.css";

export default class StartupDetails extends Component {
  state = { 
    startup: {}
  };

  componentDidMount() {
    axios
      .get(`/api/startups/${this.props.match.params.id}`)
      .then((response) => {   //this works
        this.setState({
          startup: response.data
        });
      })
      .catch((err) => console.log(err));
   
  }

  render() {

    return (
      <div className="main-container">
        <div className="left-side">
          <h2>Hello {this.state.startup.companyName}</h2>
          <h4>{this.state.startup.industry}</h4>
          {/* <textarea
            name="bio"
            id="bio"
            cols="20"
            rows="10"
            value={this.state.startup.description}
          ></textarea> */}
          <h4>Where: {this.state.startup.place}</h4>
          <h4>Bio: {this.state.startup.description}</h4>
          
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
              <h4>{this.state.startup.teamMembers}</h4>
            </div>
            <div className="top-detail">
              <h4>Skills I</h4>
              <h4>{this.state.startup.skillsI}</h4>
            </div>
            <div className="top-detail">
              <h4>Skills II</h4>
              <h4>{this.state.startup.skillsII}</h4>
            </div>
            <div className="top-detail">
              <h4>Pitch Deck</h4>
              <h4>{this.state.startup.pitchDeck}</h4>
            </div>
          </div>
          <h3 className="overview">Overview</h3>
          <hr />
          <div className="bottom">
              <div className="bot-left">
                <div className="bot-detail">
                  <h4>
                    Team <span>{this.state.startup.teamMembers}</span>
                  </h4>
                  <h4>
                    Has all necessary skills: <span>{this.state.startup.skillsII}</span>
                  </h4>
                  <h4>
                    Experience <span>{this.state.startup.experience}</span>
                  </h4>
                </div>
              </div>
              <div className="bot-right">
                <div className="bot-detail">
                  <h4>
                     {/* Skills available { this.state.startup.skillsI.map(a => {return (<span>{a}  </span>) } ) }  */}
                  </h4>
                  {/* <h4>
                    Skills missing { this.state.startup.skillsIII.map(a => {return (<span> {a}  </span>) } ) }
                  </h4> */}
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
