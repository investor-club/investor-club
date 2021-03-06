import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Portfolio.css";

export default class Portfolio extends Component {
  state = {
    user: this.props.user,
    data: []//this.props.user.inPortfolio
  };

  componentDidMount() {
    axios
      .get(`/api/investors/portfolio/${this.props.user._id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data.inPortfolio,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="card-container">
        {this.state.data.map((startup) => {
          return (
            <div className="card" key={startup._id}>
              <div className="card-top">
                <img src="#" alt="company image" />
                <span>score</span>
              </div>
              <div className="card-middle">
                <h3>{startup.companyName}</h3>
                <h4>{startup.industry}</h4>
                <h4>{startup.place}</h4>
              </div>
              <div className="card-bottom">
                <Link to={`/onestartup/${startup._id}`} className="card-button">
                  Learn more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
