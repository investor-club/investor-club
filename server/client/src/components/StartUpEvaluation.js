import React from "react";
import Q1place from "./evalQuestions/Q1place";
import Q2industry from "./evalQuestions/Q2industry";
import Q3stage from "./evalQuestions/Q3stage";
import Q4foundation from "./evalQuestions/Q4foundation";
import Q5teamMember from "./evalQuestions/Q5teamMember";
import Q6skillsI from "./evalQuestions/Q6skillsI";
import Q7skillsII from "./evalQuestions/Q7skillsII";
import Q8skillsIII from "./evalQuestions/Q8skillsIII";
import Q9experience from "./evalQuestions/Q9experience";
import Q10pitchDeck from "./evalQuestions/Q10pitchDeck";
import axios from "axios";
import { updateEval } from "../services/eval";

export default class StartUpEvaluation extends React.Component {
  state = {
    // currentQuestion: [true, false, false, false, false, false, false, false, false, false],
    index: 0,
    place: "",
    industry: "",
    stage: "",
    foundation: "",
    teamMember: "",
    skillsI: "",
    skillsII: "",
    skillsIII: "",
    experience: "",
    pitchDeck: "",
  };

  //componentDidMount go to data I need and set it to the state variables.
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

  setTeamMember = (teamMember) => {
    this.setState({
      teamMember: teamMember,
    });
  };

  setSkillsI = (skillsI) => {
    this.setState({
      skillsI: skillsI,
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

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.index > 8) {
      console.log("this is the end of the questionnaire");
      {
        this.props.setDisplayStartupEval(false);
      }
    }

    const { place, industry, stage } = this.state;
    axios
      .put(`/api/startup/${this.state.startup._id}`, {
        place,
        industry,
        stage,
      })
      .then((response) => {
        console.log("response data", response.data);
        this.setState({
          index: this.state.index + 1,
        });
        // .catch((err) => {
        //     return err;
        //     });
      });

    //with using services, but it didn't work
    // updateEval(place, industry, stage)
    //     .then(data => {
    //         console.log("data is updated");
    //         //if not empty
    //         this.setState({
    // index: (this.state.index + 1)
    // currentQuestion: display
    //         })
    //     })

    //need axios post to route in backend, findbyId and update
  };

  showPrevious = (e) => {
    this.setState({
      index: this.state.index - 1,
    });
  };

  render() {
    if (this.props.displayStartupEval) {
      let displayedComponent;
      switch (this.state.index) {
        case 0:
          displayedComponent = (
            <Q1place place={this.state.place} setPlace={this.setPlace} />
          );
          break;
        case 1:
          displayedComponent = (
            <Q2industry
              flag={true}
              industry={this.state.industry}
              setIndustry={this.setIndustry}
            />
          );
          break;
        case 2:
          displayedComponent = (
            <Q3stage
              flag={true}
              stage={this.state.stage}
              setStage={this.setStage}
            />
          );
          break;
        case 3:
          displayedComponent = (
            <Q4foundation
              flag={true}
              stage={this.state.foundation}
              setStage={this.setFoundation}
            />
          );
          break;
        case 4:
          displayedComponent = (
            <Q5teamMember
              flag={true}
              teamMember={this.state.teamMember}
              setTeamMember={this.setteamMember}
            />
          );
          break;
        case 5:
          displayedComponent = (
            <Q6skillsI
              flag={true}
              skillsI={this.state.skillsI}
              setSkillsI={this.setskillsI}
            />
          );
          break;
        // case 6:
        //     displayedComponent = <Q6skillsII flag={true} skillsII={this.state.skillsII} setSkillsII={this.setskillsII}/>
        //     break;
        default:
          break;
      }
      return (
        <div>
          <h2>Tell us about your startup!</h2>
          <div
            style={{
              backgrounColor: "grey",
            }}
          >
            {/* <div className=progressBar></div> */}
          </div>
          <a href="" onClick={this.showPrevious}>
            Back
          </a>
          <form onSubmit={this.handleSubmit}>
            {displayedComponent}
            <button type="submit">Next</button>
          </form>
        </div>
      );
    } else {
      return <></>;
    }
  }
}
