import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import StartUpList from "./StartUpList";
// import { Route } from "react-router-dom";

export default class InvestorDashboard extends Component {
  state = {
    user: this.props.user,
    type: this.props.type,
  };

  render() {
 
    return (
      <div>
        <h1>     
         <StartUpList user={this.state.user} type={this.state.type}/>
        </h1>
        <Link to='/investorlist'> Investors </Link>
      </div>
    );
  }
}
