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

export default class StartUpEvaluation extends React.Component {
    state = {
        // currentQuestion: [true, false, false, false, false, false, false, false, false, false],
        index: 0,
        place: "",
        industry: "",
        stage: "",
        
    }

    //componentDidMount go to data I need and set it to the state variables.

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.index >1){
            console.log("this is the end of the questionnaire");
            {this.props.setDisplayStartupEval(false)}           
        }
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
                    displayedComponent = <Q1place flag={true}/>
                    break;
                case 1:
                    displayedComponent = <Q2industry flag={true}/>
                    break;
                case 2:
                    displayedComponent = <Q3stage flag={true}/>
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
       