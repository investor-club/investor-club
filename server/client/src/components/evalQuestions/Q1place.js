import React from 'react';

export default class Q1place extends React.Component{
    render(){
        if(this.props.flag) {
            return (
                <div>
                <label htmlFor="place">Where are you located?</label><br/>
                <input 
                    type='text'
                    id='place'
                    name='place'
                    placeholder='q1'
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