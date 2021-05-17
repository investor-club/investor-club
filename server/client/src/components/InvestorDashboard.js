import React, { Component } from 'react';


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
    let toRender;
    console.log(this.props.type)
    if (this.props.type === "investor") {
        toRender = (<div>
            <h1>I'M AN INVESTOR</h1>
            <article>Investment Portfolio</article>
            <article>Investor Profile</article>
            <article>Startups</article>
            <article>Investors</article>
        </div>)
    } else if (this.props.type === "startup") {
        toRender=(
            <div>
                <article>Profile</article>
                <article>Who invested?</article>
                <article>Evaluation</article>
            </div>
            )
        }

    return (
        <div>
            <h1>YO!!!</h1>
            {toRender}
        </div>
    )
}


}
    

