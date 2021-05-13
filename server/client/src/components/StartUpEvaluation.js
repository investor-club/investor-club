import React from 'react';
import Q1place from './evalQuestions/Q1place';
import Q2industry from './evalQuestions/Q2industry';
import Q3stage from './evalQuestions/Q3stage';

export default class StartUpEvaluation extends React.Component {
    state = {
        currentQuestion: 2
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })

    }

    render() {
        const questions = [
            //0
            {
                criterion: 'place',
                questionText: 'Where are you located?',
            },
            //1
            {
                criterion: 'industry',
                questionText: 'In which industry are you operating?',
            },
            //2
            {
                criterion: 'stage',
                questionText: 'In what stage is your idea?',

            },
            //3
            {
                criterion: 'foundation',
                questionText: 'Is your company already founded?',
            },
            //4
            {
                criterion: 'teamMember',
                questionText: 'How many core team members do you have?',
            },
            //5
            {
                criterion: 'skillsI',
                questionText: 'Which skills do you have in your team (professional experience of at least 1 year, a Master or Bachelor degree or something similar)?'
            },
            //6
            {
                criterion: 'skillsII',
                questionText: 'Do you have all the necessary skills in your team to develop the idea?'
            },
            //7
            {
                criterion: 'skillsIII',
                questionText: 'If "No", which skills are you looking for?'
            },
            //8
            {
                criterion: 'experience',
                questionText: 'Did you found a startup before?'
            },
            //9
            {
                criterion: 'pitchDeck',
                questionText: 'If you have a Pitch Deck you can upload it (up to XX MB) here:'
            }
        ];
        


        return(
            <div>
                <h2>Hello from StartUpEvaluation</h2>
                <form >
                    <label htmlFor={questions[this.state.currentQuestion].criterion}>{questions[this.state.currentQuestion].questionText}</label>
                    {/* <Q1place/> */}
                    <Q3stage/>
                    <button type="submit" onClick={this.handleSubmit}>Next</button>
                </form>

            </div>
        )
    }
}