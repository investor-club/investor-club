import React, { Component } from "react";

export default class LandingPage extends Component {
  state = {
    user: this.props.user,
  };
  render() {
    // let landing;
    // {
    //   !this.state.user ? return (landing = <LandingPage />) : (landing = <></>) ;
    // }
    if (!this.state.user) {
      return (
        <div>
          <div class="purpleBackground"></div>
          <div class="bodyPadding">
            {/* <h1>{landing}</h1> */}
            <h1>lading page</h1>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}
