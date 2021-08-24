import React from "react";
import axios from "axios";
import StartUpEdit from "./StartUpEdit";
import "./StartUpProfile.css";
import {rating} from "../services/rating";
import pin from "../public/pin1.svg";

export default class StartUpProfile extends React.Component {
  state = {
    user: this.props.user,
    error: null,
    editForm: false,
    username: this.props.user.username,
    email: this.props.user.email,
    companyName: this.props.user.companyName,
    place: this.props.user.place,
    description: this.props.user.description,
  };

  getData = () => {
    axios
      .get(`/api/startups/${this.props.user._id}`)
      .then((response) => {
        console.log("response data", response.data);
        this.setState({
          user: response.data
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
          user: response.data,
          editForm: false,
        });
        console.log("SECOND RATING CALL", response)
        rating(response.data)
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
            <img id="profilePic"src={this.state.user.imageUrl} alt="profile pic" />
            <h2>{this.state.user.companyName}</h2>
            <h4>{this.state.user.industry}</h4>
            <p>{"Description"}{this.state.user.description}</p>
            {/* <textarea
              name="bio"
              id="bio"
              cols="20"
              rows="10"
              value={this.state.user.description}
            ></textarea> */}
            <br />
            <div className="sideBySide">
              <div> <img id="pin" src={pin} alt="pin" /></div>
              <div><p>{this.state.user.place && this.state.user.place.toUpperCase()}</p></div>
            </div>
            
            <div className="social-links">
              <a href="google.com">{this.state.user.website}</a>
              <a href={this.state.user.pitchDeck}>PitchDeck</a>
            </div>
          </div>
          <div className="right-side">
            <h3 className="score">
            Startup Rating   <span>{this.state.user.rating}/6</span>
            </h3>
            <hr />
            <div className="top">
              <div className="top-detail">
                <h4>Team</h4>
                <p>{this.state.user.teamMembers}{"/1"}</p>
              </div>
              <div className="top-detail">
                <h4>Skills I</h4>
                <p>{this.state.user.skillsI.length}/6</p>
              </div>
              <div className="top-detail">
                <h4>Skills II</h4>
                <p>{this.state.skillsII}</p>
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
                    Team <span><p>{this.state.user.teamMembers}</p></span>
                  </h4>
                  <h4>
                    Has all necessary skills: <span><p>{this.state.user.skillsII}</p></span>
                  </h4>
                  <h4>
                    Experience <span><p>{this.state.user.experience}</p></span>
                  </h4>
                </div>
              </div>
              <div className="bot-right">
                <div className="bot-detail">
                  <h4>
                    Skills available { this.state.user.skillsI.map(a => {return (<span> <p>  {a}</p></span>) } ) }
                  </h4>
                  <h4>
                    Skills missing { this.state.user.skillsIII.map(a => {return (<span> <p>  {a}</p></span>) } ) }
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="edit-form">
          <button onClick={this.toggleEditForm}>Edit Profile</button>
          {this.state.editForm && (
            <StartUpEdit
              {...this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              getData={this.getData}
              user={this.state.user}
              skillsI={this.state.user.skillsI}
              skillsIII={this.state.user.skillsIII}
            />
          )}
        </div>
      </div>
    );
  }
}
