import React from 'react';

export default class Q9experience extends React.Component{
    handleChange = (event) => {
        this.props.setExperience(event.target.value);
    };

    render(){
            return (
                <div >
                    <label htmlFor="experience" >Did you found a startup before?</label><br/>
                    <input 
                    type='text'
                    id='experience'
                    name='experience'
                    value= {this.props.experience}
                    onChange={this.handleChange}
                    />
                 </div>
                )
      }     
}




