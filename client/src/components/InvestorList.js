import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

export default class InvestorList extends Component {

    state = {
      search: "",
      investors: [],
      user: this.props.user,
    }

    getData = () => {
        axios
          .get('/api/investors')
          .then(response => {
            this.setState({
              investors: response.data,
            });
          })
          .catch(err => console.log(err));
      }
    
    componentDidMount() {
      this.getData();
    }

    handleSearch = e => {
      let regex = new RegExp(this.state.search, "gi")
           // If the search bar isn't empty assign the original list to currentList
      if (e.target.value === "") { this.getData() };   //review
      
      this.setState((state) => ({
        search: e.target.value,
        startups: [...state.investors].filter(investor=>{
          return `${investor.companyName}${investor.place}${investor.industry}${investor.statement}`
          .toLowerCase().match(regex);
        }),
      }))
    }
  
    handleSort = (e) => {
      //alphabetically
      if (e.target.value === "a-z") {
        this.setState( state => ({
          investors: [...state.investors.sort((a,b) => a.lastName.localeCompare(b.lastName) )]
        }) )
      }
      if (e.target.value === "z-a") {
        this.setState( state => ({
          investors: [...state.investors.sort((a,b) => b.lastName.localeCompare(a.lastName) )]
        }) )
      }
    }

    handleFilter = e => {
      const name = e.target.name;
      this.setState( state => ({
        [name]: e.target.value,
        investors: [...state.investors].filter(startup => {
          return startup.stage.includes(e.target.value)
        }),
      }))
    }
  
    render() {
      const portfolioToDisplay = this.state.investors.map(i => { return i.inPortfolio.map( s => {return s }) })
      console.log(portfolioToDisplay);
        const displayedList = this.state.investors.map( investor => {
          return (<tr className="one-startup" key={investor._id}>
            <td><img src="https://www.kindpng.com/picc/m/430-4304834_anonymous-guy-fawkes-mask-logo-hd-png-download.png" width="150px"></img></td>
            <td> <h2><Link to="/investordetails">{investor.companyName}</Link></h2> </td>
            <td>{investor.firstName}</td>
            <td>{investor.lastName}</td>
            <td>{investor.place} Location</td>
            <td>{portfolioToDisplay}</td>
            
            </tr>
          )
        })
        return (
          <div className="startup-list-container">       
            <input 
            id="searchbar"
            type="text" 
            name="search" 
            value={this.state.search} 
            placeholder="search by name, keyword, interests ..." 
            onChange={this.handleSearch} 
            />
                  
            <div className="filters">
              <span> Sort </span>
                
              <select name="sort" id="sort" onChange={this.handleSort} >
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
              </select>

              <span> placeholder </span>
                
              {/* <select name="filterStage" id="filterStage" onChange={this.handleFilter} >
                <option value="">Choose option</option>
                 <option value="idea">Idea Stage</option>
                <option value="prototype">Prototype/MVP (Pre-Seed)</option>
                <option value="concept">Proof of Concept (Pre-Seed)</option>
                <option value="paying customers">First Paying Customers (Seed)</option>
                <option value="beyond">beyond the mentioned</option>
              </select> */}
            </div>

            <table>
              <tbody>
              {/* <tr>
                
              </tr> */}
              {displayedList}
              </tbody>
            </table>


          </div>
        )
    }
}

