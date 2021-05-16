import React, { Component } from 'react';
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

render () {
    return(
        <h1>HELLO AGAIN!!!</h1>
    )
}


}
    // render() {
    //     let toRender;
    //     console.log(this.props.type)
    //     if (this.props.type === "investor") {
    //         toRender = (<div>
    //             <h1>I'M AN INVESTOR</h1>
    //             <article>Investment Portfolio</article>
    //             <article>Investor Portfolio</article>
    //             <article>Startups</article>
    //             <article>Investors</article>
    //         </div>)
    //     } else if (this.props.type === "investor") {
    //         toRender=(
    //             <div>
    //                 <article>Investment Portfolio</article>
    //                 <article>Investor Portfolio</article>
    //                 <article>Startups</article>
    //                 <article>Investors</article>
    //             </div>
    //             )
    //         }

    //     return (
    //         <div>
    //             <h1>YO!!!</h1>
    //             {toRender}
    //         </div>
    //     )
    // }

