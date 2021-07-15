import React from "react";
import Q1place from "./evalQuestions/Q1place";
import Q2industry from "./evalQuestions/Q2industry";
import Q3stage from "./evalQuestions/Q3stage";
import Q4foundation from "./evalQuestions/Q4foundation";
import Q5teamMembers from "./evalQuestions/Q5teamMembers";
import Q6skillsI from "./evalQuestions/Q6skillsI";
import Q7skillsII from "./evalQuestions/Q7skillsII";
import Q8skillsIII from "./evalQuestions/Q8skillsIII";
import Q9experience from "./evalQuestions/Q9experience";
import Q10pitchDeck from "./evalQuestions/Q10pitchDeck";
import axios from "axios";
import {service} from "../services/service";
import { rating } from "../services/rating";
import "./StartUpEvaluation.css"

export default class StartUpEvaluation extends React.Component {
  state = {
    index: 1,
    error: null,
    username: "",
    email: "",
    companyName: "",
    statement: "",
    description: "",
    place: "",
    industry: "",
    stage: "",
    foundation: "",
    teamMembers: "",
    skillsI: [],
    skillsII: "",
    skillsIII: [],
    experience: "",
    pitchDeck: "https://res.cloudinary.com/desxd5jb3/image/upload/v1621509639/investor-club/xt51uiofo6cjrf2xvkem.png",
    rating: 0
  };

  componentDidMount() {
    console.log(this.props.user._id)
    axios
      .get(`/api/startups/${this.props.user._id}`)
      .then(response => {
        console.log("component did mount EVAL", response.data);
        this.setState({
          username: response.data.username,
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
          
          rating: response.data.rating,
        });
      })
      .catch((err) => console.log(err));
  }

  //componentDidMount gets to data I need and set it to the state variables.
  setPlace = (place) => {
    this.setState({
      place: place,
    });
  };

  setIndustry = (industry) => {
    this.setState({
      industry: industry,
    });
  };

  setStage = (stage) => {
    this.setState({
      stage: stage,
    });
  };

  setFoundation = (foundation) => {
    this.setState({
      foundation: foundation,
    });
  };

  setTeamMembers = (teamMembers) => {
    this.setState({
      teamMembers: teamMembers,
    });
  };

  setSkillsI = (skills) => {
    console.log("SKILLS LIFTED:", skills);
    this.setState({
      skillsI: skills,
    });
  };

  setSkillsII = (skillsII) => {
    this.setState({
      skillsII: skillsII,
    });
  };

  setSkillsIII = (skillsIII) => {
    this.setState({
      skillsIII: skillsIII,
    });
  };

  setExperience = (experience) => {
    this.setState({
      experience: experience,
    });
  };

  setPitchDeck = (pitchDeck) => {
    this.setState({
      pitchDeck: pitchDeck,
    });
  };

  // this method handles just the file upload
  handleFileUpload = e => {
    console.log('The file to be uploaded is: ', e.target.files[0]);
 
    const uploadData = new FormData();
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('pitchDeck', e.target.files[0]);
    console.log("upload data", uploadData)

    service
      .handleUpload(uploadData, this.props.user._id)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ pitchDeck: response.secure_url });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.index > 9) {
      console.log("this is the end of the questionnaire");
      this.props.setDisplayStartupEval(false);

    const {
      place,
      industry,
      stage,
      foundation,
      teamMembers,
      skillsI,
      skillsII,
      skillsIII,
      experience,
      //pitchDeck
    } = this.state;
    console.log("state at beginning of handleSubmit", this.state); //is updating

    //post form data
    axios.post(`/api/startups/${this.props.user._id}`, {
        place,
        industry,
        stage,
        foundation,
        teamMembers,
        skillsI,
        skillsII,
        skillsIII,
        experience,
        // pitchDeck,
      })
      .then(response => {
        console.log("RESPONSE FROM EVAL FRONT: ", response.data);
        rating(response.data.startup); //call the rating service function
        this.props.history.push("/startup/profile") } 
      )
      .catch( err => {
        console.log("EVALUATION ERROR ", err);
      });
    }
    this.setState({
      index: this.state.index + 1,
    });
  };
    
  showPrevious = (e) => {
    e.preventDefault();
    this.setState({
      index: this.state.index - 1,
    });
  };

  render() {
    if (this.props.displayStartupEval) {
      let progressWidth = this.state.index * 10;
      // console.log("progressWidth",progressWidth)
      let displayedComponent;
      switch (this.state.index) {
        case 1:
          displayedComponent = (
            <Q1place place={this.state.place} setPlace={this.setPlace} />
          );
          break;
        case 2:
          displayedComponent = (
            <Q2industry
              industry={this.state.industry}
              setIndustry={this.setIndustry}
            />
          );
          break;
        case 3:
          displayedComponent = (
            <Q3stage stage={this.state.stage} setStage={this.setStage} />
          );
          break;
        case 4:
          displayedComponent = (
            <Q4foundation
              foundation={this.state.foundation}
              setFoundation={this.setFoundation}
            />
          );
          break;
        case 5:
          displayedComponent = (
            <Q5teamMembers
              teamMembers={this.state.teamMembers}
              setTeamMembers={this.setTeamMembers}
            />
          );
          break;
        case 6:
          displayedComponent = (
            <Q6skillsI
              skillsI={this.state.skillsI} //array!!!
              setSkillsI={this.setSkillsI}
            />
          );
          break;
        case 7:
          displayedComponent = (
            <Q7skillsII
              skillsII={this.state.skillsII}
              setSkillsII={this.setSkillsII}
            />
          );
          break;
        case 8:
          displayedComponent = (
            <Q8skillsIII
              skillsII={this.state.skillsII}
              skillsIII={this.state.skillsIII}
              setSkillsIII={this.setSkillsIII}
            />
          );
          break;
        case 9:
          displayedComponent = (
            <Q9experience
              skillsII={this.state.experience}
              setExperience={this.setExperience}
            />
          );
          break;
        case 10:
          displayedComponent = (
            <Q10pitchDeck
              skillsII={this.state.pitchDeck}
              setPitchDeck={this.setPitchDeck}
              handleFileUpload={this.handleFileUpload}
            />
          );
          break; 
        default:
          break;
      }
      return (
        <div>
          <div class="purpleBackground"></div>
          <div class="bodyPadding">
            <div>
              <a onClick={this.showPrevious}>
                Back
              </a>
              <div className="progressBarBg">
                <div
                  className="progressBar"
                  style={{ width: `${progressWidth}%` }}
                ></div>
              </div>
            </div>

            <div class="questionContainer">
              <form onSubmit={this.handleSubmit}>
                {displayedComponent}

                <button type="submit">Next</button>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}
