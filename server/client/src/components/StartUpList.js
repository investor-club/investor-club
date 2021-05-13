import React, { Component } from 'react'
import {Switch, Link} from "react-router-dom";
import axios from 'axios';
//import list of startups from???

export default class StartUpList extends Component {

    state = {
        startups: []
    }

    getData = () => {
        axios
          .get('/api/startups')
          .then(response => {
            console.log("HELLOOOO THIS IS RESPONSE: ", response.data)
            this.setState({
              startups: response.data
            });
            console.log("WORKING: ", this.state.startups) 
          })
          .catch(err => console.log(err));
      }
    
    componentDidMount() {
        this.getData();
        console.log("HELLOOOO THIS IS STATE: ", this.state.startups)
      }

    // handleInputChange = e => {
    //     const target = e.target;
    //     // const value = target.type === 'checkbox' ? target.checked : target.value;
    //     // const name = target.name;
    //     // // filtering:
    //     // this.setState({
    //     //   [name]: value
    //     // });
    //   }

    // const displayedMapped = this.state.displayed.map(startup => {})  

    render() {
        // const filteredUsers = startups.filter(a=>{})
        // const displayedList = filteredList.map( item => {
        //     return (
        //         <div className="startupResult">
        //             <h1>{item.companyName}</h1>
        //             <h2>{item.industry}, {item.location} & other stuff</h2>
        //         </div>
        //     )
        // })

        return (
            <div>
               
            </div>
        )
    }
}
// 
