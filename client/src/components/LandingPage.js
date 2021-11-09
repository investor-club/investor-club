import React, { Component } from "react";
import axios from "axios";
import "./LandingPage.css";


export default class LandingPage extends Component {
  state = {
    user: this.props.user,
    topRated: []
  };

  getData = () => {
    axios
      .get("/api/startups")
      .then((response) => {
        this.setState({
          topRated: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const topDisplayed = this.state.topRated.map((startup) => {
        return (
          <tr key={startup._id}>
            <td>
              <img className='landingPageImg'
                src="https://www.kindpng.com/picc/m/430-4304834_anonymous-guy-fawkes-mask-logo-hd-png-download.png"
                width="150px" alt='thumbnail'
              ></img>
            </td>
            <td>{startup.companyName}</td>
            <td>{startup.industry}</td>
            <td>{startup.place}</td>
            <td>{startup.stage}</td>
          </tr>
        )
    })
    
    if (!this.state.user) {
      return (
        <div>
          <div className="purpleBackground"></div>
          <div className="bodyPadding centreTable">
            <h1>Startups that recently joined us</h1>
            <table>
             <thead>
               <tr>
                 <th>Logo</th>
                 <th>Company name</th>
                 <th>Industry</th>
                 <th>Place</th>
                 <th>Stage</th>
               </tr>
             </thead>
              <tbody>
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