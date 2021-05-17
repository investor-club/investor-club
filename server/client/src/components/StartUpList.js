import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
//import list of startups from???

export default class StartUpList extends Component {

    state = {
      search: "",
      startups: []
    }

    getData = () => {
        axios
          .get('/api/startups')
          .then(response => {
            console.log("STARTUP LIST: ", response.data)
            this.setState({
              startups: response.data
            });
          })
          .catch(err => console.log(err));
      }
    
    componentDidMount() {
        this.getData();
      }

    handleInputChange = e => {
        // const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        // // filtering:
        this.setState({
        [name]: e.target.value
        });
      }

    render() {
        const filteredUsers = this.state.startups.filter(startup=>{
          return `${startup.companyName}${startup.bio}`.toLowerCase().includes(this.state.search.toLowerCase())
        })

        const displayedList = filteredUsers.map( startup => {
          return (<div className="one-startup">
            <img src="https://www.kindpng.com/picc/m/430-4304834_anonymous-guy-fawkes-mask-logo-hd-png-download.png" width="100px"></img>
            <h2>{startup.companyName}</h2>
            <p>{startup.industry}</p>
            <p>{startup.email}</p>
            <p>{startup.location}</p>
            <p>{startup.stage}</p>
            </div>
          )
        })

        return (
            <div className="startup-list">
               <input 
                type="text" 
                name="search" 
                value={this.state.search} 
                placeholder="search..." 
                onChange={this.handleInputChange} 
                id="searchbar"
                />
              {displayedList}
            </div>
        )
    }
}
// 
