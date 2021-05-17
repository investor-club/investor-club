import React from 'react';

export default class Q1place extends React.Component{
    handleChange = (event) => {
        this.props.setPlace(event.target.value);
    };

    render(){  
            return (
                <div>
                <label htmlFor="place">Where are you located?</label><br/>
                <input 
                    type='text'
                    id='place'
                    name='place'
                    value= {this.props.place}
                    onChange={this.handleChange}
                />
                </div>
                )
      }     
}