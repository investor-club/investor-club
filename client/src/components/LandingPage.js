import React, { Component } from 'react'

export default class LandingPage extends Component {
    state = {
        user: this.props.user
    }
    render() {
        let landing;
        this.state.user ? landing = (<></>) : landing = (<LandingPage />)
        return (
            <div>
                <div class='purpleBackground'></div>
                <div class='bodyPadding'>
                    <h1>{landing}</h1>
                </div>
            </div>
        )
    }
}
