import React, { Component } from "react";
import { Link } from "react-router-dom";
// import '../public' from '../public'
import startupImg from "../public/undraw_upgrade_06a0.svg"
import investorImg from "../public/undraw_revenue_3osh.svg"

export default class SignUpChoice extends Component {
  render() {
    return (
      <div>
      <div class='purpleBackground'></div>
      <div id='signupChoice'>
        <div id='startupChoice'>
          <img src={startupImg} alt="startup image"/>
          <h2>
            <Link to="/signup/startup">I'm a Startup</Link>
          </h2>
        </div>
        <div id='investorChoice'>
          <img src={investorImg} alt="investor image"/>
          <h2>
            <Link to="/signup/investor">I'm an Investor</Link>
          </h2>
        </div>
      </div>
      </div>
    );
  }
}
