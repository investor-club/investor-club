import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  state = {
    user: this.props.user,
    topRated: []
  };

  // axios req with a limit to first 5
  getData = () => {
      console.log("")
  }

  render() {
    const topDisplayed = this.state.topRated.map((startup) => {
        return (
          <tr className="one-startup" key={startup._id}>
            <td>
              <img
                src="https://www.kindpng.com/picc/m/430-4304834_anonymous-guy-fawkes-mask-logo-hd-png-download.png"
                width="150px"
              ></img>
            </td>
            <td>
              <h2>
                <Link to="/startupdetails">{startup.companyName}></Link>
              </h2>
            </td>
            <td>{startup.statement}</td>
            <td>{startup.industry}</td>
            <td>{startup.place}</td>
            <td>{startup.stage}</td>
          </tr>
        )
    })
    
    if (!this.state.user) {
      return (
        <div>
          <div class="purpleBackground"></div>
          <div class="bodyPadding">
            <table>
          <tbody>
            <h1>I'm still watching you, your Landing Page</h1>
            {topDisplayed}
          </tbody>
        </table>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}
