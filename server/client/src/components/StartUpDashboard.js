import React, { Component } from 'react';
import LandingPage from 'react';
import StartUpEvaluation from './StartUpEvaluation';

export default class StartUpDashboard extends Component {
    state = {
        displayStartupEval: true,
      };

    setDisplayStartupEval = (displayStartupEval) => {
        this.setState({
          displayStartupEval: displayStartupEval,
        });
      };

    render() {

        return (
            <div>
            <StartUpEvaluation {...this.state} {...this.props} setDisplayStartupEval={this.setDisplayStartupEval}/>
            <article>Profile</article>
            <article>Who invested?</article>
            <article>Evaluation</article>
        </div>
        )
    }
}
