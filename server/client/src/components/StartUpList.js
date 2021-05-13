import React, { Component } from 'react'
import {Switch, Link} from "react-router-dom";
//import list of startups from???

export default class StartUpList extends Component {

    state = {
    }

    getData = () => {
        axios.get('/api/projects')
          .then(response => {
            console.log(response)
            this.setState({
              projects: response.data
            })
          })
          .catch(err => console.log(err));
      }
    
      componentDidMount() {
        this.getData();
      }
    handleInputChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      

    // const displayedMapped = this.state.displayed.map(startup => {
    //     return (
    //         <div className="startupResult">
    //             <h1>{this.props.startup.companyName}</h1>
    //             <h2>{this.props.startup.industry}, {this.props.startup.location} & other stuff</h2>
    //         </div>
    //     )
    // })  

    render() {

        const filteredUsers = this.props.startups.filter(a=>{})
        const displayedList = filteredList.map(a=>{})

        return (
            <div>
               {displayedList}
            </div>
        )
    }
}

