import React from 'react';

export default class Q9experience extends React.Component{
    render(){
        if(this.props.flag) {
            return (
                <div>
                    <label htmlFor="foundation">If you have a Pitch Deck you can upload it here:</label><br/>
                    <input 
                    type='text'
                    id='experience'
                    name='experience'
                    // value=
                    // onChange=
                    />
                </div>
                )
        } else {
            return (
            <>
            </>
             )
          }
      }     
}




