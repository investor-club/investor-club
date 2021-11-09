import React, { Component } from 'react';
import LandingPage from 'react';
import StartUpEvaluation from './StartUpEvaluation';

export default class StartUpDashboard extends Component {
    state = {
        displayStartupEval: true,
        user: this.props.user
      };

    setDisplayStartupEval = (displayStartupEval) => {
        this.setState({
          displayStartupEval: displayStartupEval,
        });
      };

    render() {
        console.log("props",this.props)

        return (
            <div>
              <StartUpEvaluation {...this.state} {...this.props} setDisplayStartupEval={this.setDisplayStartupEval}/>
            </div>
        )
    }
}

 