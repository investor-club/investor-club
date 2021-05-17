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
    //method set initial state
    //do axios request.

    componentDidMount(){
        axios.get(`/api/startup/${this.props.user._id}`)
            .then(response => {
                console.log("component did mount response data",response.data);
                this.setState({
                    place: response.data.place,
                    industry: response.data.industry,
                    stage: response.data.stage
                    // foundation: '',
                    // teamMember: '',
                    // skillsI: '',
                    // skillsII: '',
                    // skillsIII: '',
                    // experience: '',
                    // pitchDeck: ''  
                })
            })
            .catch(err => console.log(err))
            
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
        if (this.state.index >8){
            console.log("this is the end of the questionnaire");
            {this.props.setDisplayStartupEval(false)}           
        }

        const {place, industry, stage} = this.state;
        axios.post(`/api/startup/${this.props.user._id}`, 
        {
            place,
            industry,
            stage
        })
            .then(() => {
                // console.log("response data", response.data);
                this.setState({
                    index: (this.state.index + 1)
                })
                console.log('props',this.props.user);
            })
            .catch((err) => {
                console.log(err);
                if (err.response.status === 404) {
                    this.setState({
                      err: 'Not found 🤷‍♀️🤷‍♂️'
                    })
                  }
            });
            
            

        //with using services, but it didn't work
            // this.setState({
            //     index: (this.state.index + 1)
            // })

        // const {place, industry, stage} = this.state;
        // console.log('STATE',this.state)
        // console.log('props',this.props.user)
        // axios.post('/api/eval/updateEval', {
        //     place,
        //     industry,
        //     stage
        // })
        //     .then(response => {
        //         console.log("response data", response.data);
        //         this.setState({
        //             index: (this.state.index + 1)
        //         })
        //     .catch((err) => {
        //         return err.response.data;
        //         });
        //     })

        // with using middleware, but it didn't work
        // updateEval(place, industry, stage)
        //     .then(data => {
        //         console.log("data is updated");
        //         //if not empty      
        //         this.setState({
        //             index: (this.state.index + 1)
        //             currentQuestion: display
        //         }) 
        //     })
         
        //need axios post to route in backend, findbyId and update
        
    }

    showPrevious = e => {
        e.preventDefault();
        this.setState({
            index: (this.state.index - 1)
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
                case 3:
                    displayedComponent = <Q4foundation flag={true} stage={this.state.foundation} setStage={this.setFoundation}/>
                    break;
                case 4:
                    displayedComponent = <Q5teamMember flag={true} teamMember={this.state.teamMember} setTeamMember={this.setTeamMember}/>
                    break;
                case 5:
                    displayedComponent = <Q6skillsI flag={true} skillsI={this.state.skillsI} setSkillsI={this.setSkillsI}/>
                    break;   
                case 6:
                    displayedComponent = <Q7skillsII flag={true} skillsII={this.state.skillsII} setSkillsII={this.setSkillsII}/>
                    break;
                case 7:
                    displayedComponent = <Q8skillsIII flag={true} skillsII={this.state.skillsIII} setSkillsIII={this.setSkillsIII}/>
                    break; 
                case 8:
                    displayedComponent = <Q9experience flag={true} skillsII={this.state.experience} setExperience={this.setExperience}/>
                    break;
                case 9:
                    displayedComponent = <Q10pitchDeck flag={true} skillsII={this.state.pitchDeck} setPitchDeck={this.setPitchDeck}/>
                    break;                          
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
                    <a href="" onClick={this.showPrevious}>Back</a>
                    <form onSubmit={this.handleSubmit}>
                        {displayedComponent}
                        <button type="submit" >Next</button>
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
       