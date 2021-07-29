import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class StartUpList extends Component {
  state = {
    search: "",
    startups: [],
    user: this.props.user,
  };

  getData = () => {
    axios
      .get("/api/startups")
      .then((response) => {
        // console.log("STARTUP LIST: ", response.data)
        this.setState({
          startups: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getData();
  }

  handleSearch = (e) => {
    let regex = new RegExp(this.state.search, "gi");
    // If the search bar isn't empty assign the original list to currentList
    if (e.target.value === "") {
      this.getData();
    } //IS THERE A BETTER WAY???

    this.setState((state) => ({
      search: e.target.value,
      startups: [...state.startups].filter((startup) => {
        return `${startup.companyName}${startup.place}${startup.industry}${startup.statement}`
           //removed tolowercase
          .match(regex);
      }),
    }));
  };

  handleSort = (e) => {
    //alphabetically
    if (e.target.value === "a-z") {
      this.setState((state) => ({
        startups: [
          ...state.startups.sort((a, b) =>
            a.companyName.localeCompare(b.companyName)
          ),
        ],
      }));
    }
    if (e.target.value === "z-a") {
      this.setState((state) => ({
        startups: [
          ...state.startups.sort((a, b) =>
            b.companyName.localeCompare(a.companyName)
          ),
        ],
      }));
    }
    //sort by rating (highest)
    if (e.target.value === "highest") {
      this.setState((state) => ({
        startups: [...state.startups.sort((a, b) => b.rating - a.rating)],
      }));
    }
    if (e.target.value === "lowest") {
      this.setState((state) => ({
        startups: [...state.startups.sort((a, b) => a.rating - b.rating)],
      }));
    }
  };

  

  handleAdd = (id) => {
    axios
      .get(`/api/startups/${id}`)
      .then((startupFromDB) => {
        console.log("FOUND STARTUP RESPONSE: ", startupFromDB.data._id);
        axios
          .put(`/api/investors/portfolio/${this.state.user._id}`, {
            startupToAdd: startupFromDB.data._id, // WHAT TO PASS??
          })
          .then((investorFromDB) => {
            console.log(
              "INVESTOR FOUND ",
              investorFromDB,
              "USER: ",
              this.state.user
            );
            this.setState((state) => ({
              user: {
                ...state.user,
                inPortfolio: [
                  ...state.user.inPortfolio,
                  startupFromDB.data._id,
                ],
              },
            }));
            this.props.setPortfolio(startupFromDB);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  handleFilter = (e) => {
    const name = e.target.name;
    //console.log("stage: ", e.target.value);
    this.setState((state) => ({
      [name]: e.target.value,
      startups: [...state.startups].filter((startup) => {
        return startup.stage.includes(e.target.value);
      }),
    }));
  };

  render() {
    const displayedList = this.state.startups.map((startup) => {
      return (
        <tr className="one-startup" key={startup._id}>
          <td>
            <img
              src="https://www.kindpng.com/picc/m/430-4304834_anonymous-guy-fawkes-mask-logo-hd-png-download.png"
              width="150px"
            ></img>
          </td>
          <td>
            {" "}
            <h2>
              <Link to="/startupdetails">{startup.companyName}</Link>
            </h2>
          </td>
          <td>{startup.industry}</td>
          <td>{startup.email}</td>
          <td>{startup.place}</td>
          <td>{startup.stage}</td>
          <td>{startup.rating === 0 ? 0 :  startup.rating}/6</td>
          {/* can only add if not in portfolio */}
          {/* {this.state.portfolio.includes(startup.id) ?  <td>Add to portfolio </td> :  <td>In portfolio </td>} */}
          <td>
            <button onClick={() => this.handleAdd(startup._id)}>
              Add to portfolio
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="startup-list-container">
        <input
          id="searchbar"
          type="text"
          name="search"
          value={this.state.search}
          placeholder="keyword ..."
          onChange={this.handleSearch}
        />

        <div className="filters">
          <span> Sort </span>

          <select name="sort" id="sort" onChange={this.handleSort}>
            <option value="highest">Highest rating first</option>
            <option value="lowest">Lowest rating first</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>

          <span> Stage </span>

          <select
            name="filterStage"
            id="filterStage"
            onChange={this.handleFilter}
          >
            <option value="">Choose option</option>
            <option value="idea">Idea Stage</option>
            <option value="prototype">Prototype/MVP (Pre-Seed)</option>
            <option value="concept">Proof of Concept (Pre-Seed)</option>
            <option value="paying customers">
              First Paying Customers (Seed)
            </option>
            <option value="beyond">beyond the mentioned</option>
          </select>
        </div>

        <table>
          <tbody>

            {displayedList}
          </tbody>
        </table>
      </div>
    );
  }
}
