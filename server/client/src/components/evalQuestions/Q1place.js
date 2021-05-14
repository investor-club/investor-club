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
                    //value= should change the parent state
                    // onChange=call method from parent component and change state in the parent components
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