import React, { Component } from 'react'

export default class StartupDetails extends Component {
    state = {
        startupDetails: {}
    }

    getStartupDetails = () => {
        axios.get(`http://localhost:5000/api/projects/${this.props.match.params.id}`)
        .then( responseFromApi =>{
            const startupDetails = responseFromApi.data;
            this.setState(startupDetails);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    componentDidMount(){
        this.getStartupDetails();
    }
   

    render() {
        return (
            <div>
                <h1>{this.state.startupDetails.companyName}</h1>
            </div>
        )
    }
}
