import React from 'react';

export default class Q9experience extends React.Component{
    render(){
            return (
                <div>
                    <label htmlFor="pitchDeck" value={this.props.stage}>If you have a Pitch Deck you can upload it here:</label><br/>
                    <input 
                    type='text'
                    id='pitchDeck'
                    name='pitchDeck'
                    // value=
                    // onChange=
                    />
                </div>
                )
      }     
}




