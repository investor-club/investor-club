import React from 'react';

export default class StartUpEvaluation extends React.Component {

    render() {
        const questions = [
            {
                questionText: 'Where are you located?'
            },
            {
                questionText: 'In which industry are you operating?'
            },
            {
                questionText: 'In what stage is your idea?'
            },
            {
                questionText: 'Is your company already founded?'
            },
            {
                questionText: 'How many core team members do you have?'
            },
            {
                questionText: 'Which skills do you have in your team (professional experience of at least 1 year, a Master or Bachelor degree or something similar)?'
            },
            {
                questionText: 'Do you have all the necessary skills in your team to develop the idea?'
            },
            {
                questionText: 'If "No", which skills are you looking for?'
            },
            {
                questionText: 'Did you found a startup before?'
            },
            {
                questionText: 'If you have a Pitch Deck you can upload it (up to XX MB) here:'
            }
        ];
        
        return(
            <div>
            <h2>Hello from StartUpEvaluation</h2>
            <h2>{questions[0].questionText}</h2>

            </div>
        )
    }
}