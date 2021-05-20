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
        console.log(this.props)

        return (
            <div>
            <StartUpEvaluation {...this.state} {...this.props} setDisplayStartupEval={this.setDisplayStartupEval}/>
            <article>Profile</article>
            <article>Who invested?</article>
            <article>Evaluation</article>
        </div>
        )
        // //TO CHECK BEFORE PUSHING
        // if (!this.state.user.place || !!this.state.user.foundation || !this.state.user.industry || !this.state.user.foundation  ) {
        //   return (
        //   <div>
        //   <StartUpEvaluation {...this.state} {...this.props} setDisplayStartupEval={this.setDisplayStartupEval}/>
        //   <article>Profile</article>
        //   <article>Who invested?</article>
        //   <article>Evaluation</article>
        // </div>
        // )
        // } else {
        //   return <></>;
        // }

        
        
    }
}

 