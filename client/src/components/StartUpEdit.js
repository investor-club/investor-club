import axios from "axios";
import React, { Component } from "react";

export default class StartUpEdit extends Component {
  state = {
    error: null,
    editForm: false,
    username: "",
    email: "",
    password: "",
    companyName: "",
    statement: "",
    description: "",
    place: "",
    industry: "",
    stage: "",
    foundation: "",
    teamMembers: "",
    skillsI: [],
    skillsII: "",
    skillsIII: [],
    experience: "",
  };

  getData = () => {
    axios
      .get(`/api/startups/${this.props.user._id}`)
      .then((response) => {
        console.log("response data", response.data);
        this.setState({
          username: response.data.username,
          email: response.data.email,
          password: response.data.password,
          companyName: response.data.companyName,
          statement: response.data.statement,
          description: response.data.description,
          place: response.data.place,
          industry: response.data.industry,
          stage: response.data.stage,
          foundation: response.data.foundation,
          teamMembers: response.data.teamMembers,
          skillsI: response.data.skillsI,
          skillsII: response.data.skillsII,
          skillsIII: response.data.skillsIII,
          experience: response.data.experience,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getData();
    console.log("check array: ", this.state.skillsI);
      for (let key in this.state) {
          if (this.state.skillsI.includes(key)) {
             this.setState({
                 [key]: true
             })
          }
    }
  }
  render() {
    return (
      <div>
        <h2>Edit Profile</h2>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.props.username}
            onChange={this.props.handleChange}
          />
          <br />

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />
          <br />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.props.password}
            onChange={this.props.handleChange}
          />
          <br />

          <label htmlFor="companyName">Company Name: </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={this.props.companyName}
            onChange={this.props.handleChange}
          />
          <br />

          <label htmlFor="statement">Statement: </label>
          <input
            type="text"
            id="statement"
            name="statement"
            value={this.props.statement}
            onChange={this.props.handleChange}
          />
          <br />

          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={this.props.description}
            onChange={this.props.handleChange}
          />
          <br />

          <label htmlFor="place">Where are you located?</label>
          <input
            type="text"
            id="place"
            name="place"
            value={this.props.place}
            onChange={this.props.handleChange}
          />
          <br />

          <label htmlFor="industry">In which industry are you operating?</label>
          <select
            id="industry"
            name="industry"
            onChange={this.props.handleChange}
            value={this.props.industry}
          >
            <option value="food">Food</option>
            <option value="healthcare">Healthcare</option>
            <option value="financials">Financials</option>
            <option value="mobility">Mobility</option>
            <option value="energy">Energy</option>
            <option value="education">Education</option>
            <option value="space">Space</option>
            <option value="media/advertising">Media/Advertising</option>
            <option value="agriculture">Agriculture</option>
            <option value="robotics">Robotics</option>
            <option value="blockchain">Blockchain</option>
            <option value="gaming,(cyber-)security">
              Gaming,(Cyber-)Security
            </option>
            <option value="humanResources">Human Resources</option>
            <option value="craft">Craft</option>
            <option value="fashion">Fashion</option>
            <option value="other">Other</option>
          </select>
          <br />

          <div
            onChange={this.props.handleChange}
            value={this.props.stage}
            checked={this.props.stage}
          >
            <label htmlFor="stage">In what stage is your idea?</label>
            <br />
            <input type="radio" id="Prototype" name="stage" value="prototype" />
            <label htmlFor="prototype">Prototype/MVP (Pre-Seed)</label>
            <br />

            <input type="radio" id="Concept" name="stage" value="concept" />
            <label htmlFor="concept">Proof of Concept (Pre-Seed)</label>
            <br />

            <input type="radio" id="Customers" name="stage" value="customers" />
            <label htmlFor="paying customers">
              First Paying Customers (Seed)
            </label>
            <br />

            <input type="radio" id="beyond" name="stage" value="beyond" />
            <label htmlFor="beyond">beyond the mentioned ones</label>
          </div>
          <br />
          <div
            onChange={this.props.handleChange}
            value={this.props.foundation}
            checked={this.props.foundation}
          >
            <label htmlFor="foundation">Is your company already founded?</label>
            <br />
            <input type="radio" id="yes" name="foundation" value="yes" />
            <label htmlFor="yes">Yes</label>
            <br />

            <input type="radio" id="no" name="foundation" value="no" />
            <label htmlFor="no">No</label>
            <br />
          </div>
          <br />
          <div
            onChange={this.props.handleChange}
            value={this.props.teamMembers}
            checked={this.props.teamMembers}
          >
            <label htmlFor="teamMembers">
              How many core team members do you have?
            </label>
            <br />
            <input type="radio" id="1" name="teamMembers" value="1" />
            <label htmlFor="1">1</label>
            <br />

            <input type="radio" id="2" name="teamMembers" value="2" />
            <label htmlFor="2">2</label>
            <br />

            <input type="radio" id="3" name="teamMembers" value="3" />
            <label htmlFor="3">3</label>
            <br />

            <input type="radio" id="4" name="teamMembers" value="4" />
            <label htmlFor="4">4</label>
            <br />

            <input
              type="radio"
              id="5orMore"
              name="teamMembers"
              value="5orMore"
            />
            <label htmlFor="5orMore">5 or more</label>
            <br />
          </div>
          <br />
          <div
            onChange={this.props.handleChange}
            value={this.props.skillsI}
            checked={this.props.skillsI}
          >
            <label htmlFor="skillsI" value={this.props.skillsI}>
              Which skills do you have in your team (professional experience of
              at least 1 year, a Master or Bachelor degree or something
              similar)?
            </label>
            <br />
            <input
              type="checkbox"
              id="finance"
              name="skillsI"
              value="finance"
            />
            <label htmlFor="finance">Finance</label>
            <br />

            <input
              type="checkbox"
              id="marketing"
              name="skillsI"
              value="marketing"
            />
            <label htmlFor="marketing">Marketing</label>
            <br />

            <input type="checkbox" id="sales" name="skillsI" value="sales" />
            <label htmlFor="sales">Sales</label>
            <br />

            <input type="checkbox" id="it" name="skillsI" value="it" />
            <label htmlFor="it">IT/Tech</label>
          </div>
          <br />
          <div
            onChange={this.props.handleChange}
            value={this.props.skillsII}
            checked={this.props.skillsII}
          >
            <label htmlFor="skillsII" value={this.props.stage}>
              Do you have all the necessary skills in your team to develop the
              idea?
            </label>
            <br />
            <input type="radio" id="yes" name="skillsII" value="yes" />
            <label htmlFor="yes">Yes</label>
            <br />

            <input type="radio" id="no" name="skillsII" value="no" />
            <label htmlFor="no">No</label>
            <br />
          </div>
          <br />
          <div
            onChange={this.props.handleChange}
            value={this.props.skillsIII}
            checked={this.props.skillsIII}
          >
            <label htmlFor="finance" value={this.props.stage}>
              If "No", which skills are you looking for?
            </label>
            <br />
            <input
              type="checkbox"
              id="finance"
              name="skillsIII"
              value="finance"
            />
            <label htmlFor="finance">Finance</label>
            <br />

            <input
              type="checkbox"
              id="marketing"
              name="skillsIII"
              value="marketing"
            />
            <label htmlFor="marketing">Marketing</label>
            <br />

            <input type="checkbox" id="sales" name="skillsIII" value="sales" />
            <label htmlFor="sales">Sales</label>
            <br />

            <input type="checkbox" id="it" name="skillsIII" value="it" />
            <label htmlFor="it">IT/Tech</label>
          </div>
          <br />
          <div
            onChange={this.props.handleChange}
            value={this.props.experience}
            checked={this.props.experience}
          >
            <label htmlFor="experience">Is your company already founded?</label>
            <br />
            <input type="radio" id="yes" name="experience" value="yes" />
            <label htmlFor="yes">Yes</label>
            <br />

            <input type="radio" id="no" name="experience" value="no" />
            <label htmlFor="no">No</label>
            <br />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    );
  }
}
