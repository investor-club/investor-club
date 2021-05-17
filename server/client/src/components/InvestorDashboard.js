import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


export default class InvestorDashboard extends Component {
    state = {
        type: this.props.type
    }

// componentDidMount () {
//     axios
//         .get("/api/auth/loggedin")
//         .then((response) => {
//             const session = response.data;
//             console.log("AXIOS RESPONSE ", response.data);
//             this.setState({type: response.data.type})
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }

render() {
    //investor or startup


    return (
        <div>
            <h1>
            <Link to="/startuplist">ALL STARTUPS</Link>
            </h1>
         
        </div>
    )
}


}
    

