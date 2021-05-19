import axios from "axios";
import React, { Component } from "react";

export default class StartUpEdit extends Component {
  state = {
    user: this.props.user,
    error: null,
    editForm: false,
    username: this.props.username,
    email: this.props.email,
    password: this.props.password,
    companyName: this.props.companyName,
    statement: this.props.statement,
    description: this.props.description,
    place: this.props.place,
    industry: this.props.industry,
    stage: this.props.stage,
    foundation: this.props.foundation,
    teamMembers: this.props.teamMembers,
    skillsI: this.props.skillsI,
    skillsIchecked: {
      finance: false,
      marketing: false,
      sales: false,
      it: false,
    },
    skillsII: this.props.skillsII,
    skillsIII: this.props.skillsIII,
    skillsIIIchecked: {
      finance: false,
      marketing: false,
      sales: false,
      it: false,
    },
    experience: this.props.experience,
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

  handleChecked = async (e) => {
    const name = e.target.name;
    await this.setState((state) => ({
      [name]: !state[name], //this works
    }));

    const skills = [];
    for (let key in this.state) {
      this.state[key] === true && skills.push(key);
    }
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  componentDidMount() {
    this.getData();
    console.log("check array: ", this.state.skillsIchecked);
    for (let key in this.state.skillsIchecked) {
      if (this.state.skillsI.includes(key)) {
        this.setState({
          skillsIchecked: { [key]: true },
        });
      }
    }
    for (let key in this.state.skillsIIIchecked) {
      if (this.state.skillsIII.includes(key)) {
        this.setState({
          skillsIIIchecked: { [key]: true },
        });
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
            type="hidden"
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
          <textarea
            rows="10"
            cols="30"
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

          {/* STAGE */}
          <div
            onChange={this.handleChange}
            value={this.state.stage}
            checked={this.state.stage}
          >
            <label htmlFor="stage">In what stage is your idea?</label>
            <br />
            <div class="answerRadio">
              <label for="prototype">
                <input
                  type="radio"
                  id="Prototype"
                  name="stage"
                  value="prototype"
                  checked={this.state.stage === "prototype"}
                />
                Prototype/MVP (Pre-Seed)
              </label>
              <br />
              <label for="concept">
                <input
                  type="radio"
                  id="Concept"
                  name="stage"
                  value="concept"
                  checked={this.state.stage === "concept"}
                />
                Proof of Concept (Pre-Seed)
              </label>
              <br />
              <label for="paying customers">
                <input
                  type="radio"
                  id="Customers"
                  name="stage"
                  value="customers"
                  checked={this.state.stage === "customers"}
                />
                First Paying Customers (Seed)
              </label>
              <br />
              <label for="beyond">
                <input
                  type="radio"
                  id="beyond"
                  name="stage"
                  value="beyond"
                  checked={this.state.stage === "beyond"}
                />
                beyond the mentioned ones
              </label>
            </div>
          </div>
          <br />

          {/* FOUNDATION */}
          <div
            onChange={this.handleChange}
            value={this.state.foundation}
            checked={this.state.foundation}
          >
            <label htmlFor="foundation">
              Is your company already founded?{" "}
            </label>
            <br />
            <input
              type="radio"
              id="yes"
              name="foundation"
              value={true}
              checked={this.state.foundation}
            />
            <label for="yes">Yes</label>
            <br />

            <input
              type="radio"
              id="no"
              name="foundation"
              value={true}
              checked={this.state.foundation}
            />
            <label for="no">No</label>
            <br />
          </div>
          <br />

          {/* MEMBERS */}
          <div
            onChange={this.handleChange}
            value={this.state.teamMembers}
            checked={this.state.teamMembers}
          >
            <label htmlFor="teamMembers">
              How many core team members do you have?
            </label>
            <br />
            <input
              type="radio"
              id="1"
              name="teamMembers"
              value="1"
              checked={this.state.teamMembers === "1"}
            />
            <label for="1">1</label>
            <br />

            <input
              type="radio"
              id="2"
              name="teamMembers"
              value="2"
              checked={this.state.teamMembers === "2"}
            />
            <label for="2">2</label>
            <br />

            <input
              type="radio"
              id="3"
              name="teamMembers"
              value="3"
              checked={this.state.teamMembers === "3"}
            />
            <label for="3">3</label>
            <br />

            <input
              type="radio"
              id="4"
              name="teamMembers"
              value="4"
              checked={this.state.teamMembers === "4"}
            />
            <label for="4">4</label>
            <br />

            <input
              type="radio"
              id="5orMore"
              name="teamMembers"
              value="5orMore"
              checked={this.state.teamMembers === "5orMore"}
            />
            <label for="5orMore">5 or more</label>
            <br />
          </div>
          <br />

          {/* SKILLSI */}
          <div>
            <h3>
              Which skills do you have in your team (professional experience of
              at least 1 year, a Master or Bachelor degree or something
              similar)?
            </h3>
            <input
              type="checkbox"
              id="finance"
              name="finance"
              checked={this.state.skillsI.finance}
              onChange={this.handleChecked}
            />
            <label htmlFor="finance">Finance</label>
            <br />

            <input
              type="checkbox"
              id="marketing"
              name="marketing"
              checked={this.state.skillsI.marketing}
              onChange={this.handleChecked}
            />
            <label htmlFor="marketing">Marketing</label>
            <br />

            <input
              type="checkbox"
              id="sales"
              name="sales"
              checked={this.state.skillsI.sales}
              onChange={this.handleChecked}
            />
            <label htmlFor="sales">Sales</label>
            <br />

            <input
              type="checkbox"
              id="it"
              name="it"
              checked={this.state.skillsI.it}
              onChange={this.handleChecked}
            />
            <label htmlFor="it">IT/Tech</label>
          </div>
          <br />

          {/* SKILLSII */}
          <div onChange={this.handleChange} value={this.state.skillsII}>
            <label htmlFor="skillsII" value={this.state.stage}>
              Do you have all the necessary skills in your team to develop the
              idea?
            </label>
            <br />
            <input
              type="radio"
              id="yes"
              name="skillsII"
              value="yes"
              checked={this.state.skillsII === "yes"}
            />
            <label for="yes">Yes</label>
            <br />

            <input
              type="radio"
              id="no"
              name="skillsII"
              value="no"
              checked={this.state.skillsII === "yes"}
            />
            <label for="no">No</label>
            <br />
          </div>

          <br />

          {/* SKILLSIII */}
          <div>
            <label htmlFor="finance" value={this.props.stage}>
              If "No", which skills are you looking for?
            </label>
            <br />
            <input
              type="checkbox"
              id="finance"
              name="finance"
              checked={this.state.skillsIII.finance}
              onChange={this.handleChecked}
            />
            <label htmlFor="finance">Finance</label>
            <br />

            <input
              type="checkbox"
              id="marketing"
              name="marketing"
              checked={this.state.skillsIII.marketing}
              onChange={this.handleChecked}
            />
            <label htmlFor="marketing">Marketing</label>
            <br />

            <input
              type="checkbox"
              id="sales"
              name="sales"
              checked={this.state.skillsIII.sales}
              onChange={this.handleChecked}
            />
            <label htmlFor="sales">Sales</label>
            <br />

            <input
              type="checkbox"
              id="it"
              name="it"
              checked={this.state.skillsIII.it}
              onChange={this.handleChecked}
            />
            <label htmlFor="it">IT/Tech</label>
          </div>

          <br />

          <div>
            <label htmlFor="experience">Did you found a startup before?</label>
            <br />
            <input
              type="text"
              id="experience"
              name="experience"
              value={this.state.experience}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="pitchDeck" value={this.state.pitchDeck}>
              If you have a Pitch Deck you can upload it here:
            </label>
            <br />
            <input
              type="text"
              id="pitchDeck"
              name="pitchDeck"
              // value=
              // onChange=
            />
          </div>

          <button type="submit">Update Profile</button>
        </form>
      </div>
    );
  }
}
