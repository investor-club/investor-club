import React from 'react';
import Q1place from './evalQuestions/Q1place';
import Q2industry from './evalQuestions/Q2industry';
import Q3stage from './evalQuestions/Q3stage';
import Q4foundation from './evalQuestions/Q4foundation';
import Q5teamMember from './evalQuestions/Q5teamMember';
import Q6skillsI from './evalQuestions/Q6skillsI';
import Q7skillsII from './evalQuestions/Q7skillsII';
import Q8skillsIII from './evalQuestions/Q8skillsIII';
import Q9experience from './evalQuestions/Q9experience';
import Q10pitchDeck from './evalQuestions/Q10pitchDeck';
import axios from 'axios';
import {updateEval} from '../services/eval';

export default class StartUpEvaluation extends React.Component {
    state = {
        // currentQuestion: [true, false, false, false, false, false, false, false, false, false],
        index: 0,
        place: '',
        industry: '',
        stage: '',
        foundation: '',
        teamMember: '',
        skillsI: '',
        skillsII: '',
        skillsIII: '',
        experience: '',
        pitchDeck: ''  
    }

    //componentDidMount go to data I need and set it to the state variables.
    setPlace = place => {
        this.setState({
            place: place
        })
    }

    setIndustry = industry => {
        this.setState({
            industry: industry
        })
    }

    setStage = stage => {
        this.setState({
            stage: stage
        })
    }

    setFoundation = foundation => {
        this.setState({
            foundation: foundation
        })
    }

    setTeamMember = teamMember => {
        this.setState({
            teamMember: teamMember
        })
    }

    setSkillsI = skillsI => {
        this.setState({
            skillsI: skillsI
        })
    }

    setSkillsII = skillsII => {
        this.setState({
            skillsII: skillsII
        })
    }

    setSkillsIII = skillsIII => {
        this.setState({
            skillsIII: skillsIII
        })
    }

    setExperience = experience => {
        this.setState({
            experience: experience
        })
    }

    setPitchDeck = pitchDeck => {
        this.setState({
            pitchDeck: pitchDeck
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.index >1){
            console.log("this is the end of the questionnaire");
            {this.props.setDisplayStartupEval(false)}           
        }

        const {place, industry, stage} = this.state;
        
           

        //need axios post to route in backend, findbyId and update.
        // const display = this.state.currentQuestion.slice();
        // display[this.state.index] = false;
        // display[this.state.index+1] = true;
        this.setState({
            index: (this.state.index + 1)
            // currentQuestion: display
        })
    }

    render() {
        if(this.props.displayStartupEval) {
            let displayedComponent;
            switch (this.state.index) {
                case 0:
                    displayedComponent = <Q1place place={this.state.place} setPlace={this.setPlace}/>
                    break;
                case 1:
                    displayedComponent = <Q2industry flag={true} industry={this.state.industry} setIndustry={this.setIndustry}/>
                    break;
                case 2:
                    displayedComponent = <Q3stage flag={true} stage={this.state.stage} setStage={this.setStage}/>
                    break;
                // case 3:
                //     displayedComponent = <Q4foundation flag={true} stage={this.state.foundation} setStage={this.setFoundation}/>
                //     break;
                // case 4:
                //     displayedComponent = <Q5teamMember flag={true} teamMember={this.state.teamMember} setTeamMember={this.setteamMember}/>
                //     break;
                // case 5:
                //     displayedComponent = <Q6skillsI flag={true} skillsI={this.state.skillsI} setSkillsI={this.setskillsI}/>
                //     break;   
                // case 6:
                //     displayedComponent = <Q6skillsII flag={true} skillsII={this.state.skillsII} setSkillsII={this.setskillsII}/>
                //     break;                    
                default:
                    break;
            }
            return (
                <div>
                    <h2>Tell us about your startup!</h2>
                    <div style={{
                        backgrounColor: "grey"}}>
                        {/* <div className=progressBar></div> */}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        {displayedComponent}
                        {/* <Q1place
                            flag={this.state.currentQuestion[0]}
                        />
                        <Q2industry
                            flag={this.state.currentQuestion[1]}
                        />
                        <Q3stage
                            flag={this.state.currentQuestion[2]}
                        />
                        <Q4foundation
                            flag={this.state.currentQuestion[3]}
                        />
                        <Q5teamMember
                            flag={this.state.currentQuestion[4]}
                        />
                        <Q6skillsI
                            flag={this.state.currentQuestion[5]}
                        />
                        <Q7skillsII
                            flag={this.state.currentQuestion[6]}
                        />
                        <Q8skillsIII
                            flag={this.state.currentQuestion[7]}
                        />
                        <Q9experience
                            flag={this.state.currentQuestion[8]}
                        />
                        <Q10pitchDeck
                            flag={this.state.currentQuestion[9]}
                        />                         */}
                        <button type="submit" onClick={this.handleSubmit}>Next</button>
                    </form>

                </div>
                )
        } else {
            return (
            <>
            </>
             )
          }
      }     
}
       