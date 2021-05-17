import React from 'react';

export default class StartUpProfile extends React.Component {

    state = {
        user: this.props.user
    }

    // getData = () => {

    // }

    render(){
        
        return(
            <div>
                <div>
                    <h1>Hello from Startup Profile</h1>
                    <p>{this.state.user.companyName}</p>
                    
                    {/* place not visible because updated in database, but not in session. */}
                    <p>{this.state.user.place}</p>

                </div>
                
                
                
            </div>
        )
    }
}