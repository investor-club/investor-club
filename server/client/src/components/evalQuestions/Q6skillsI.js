import React from 'react';

export default class Q6skillsI extends React.Component{
    handleChange = (event) => {
        this.props.setSkillsI(event.target.value);
    };

    render(){
        if(this.props.flag) {
            return (
                <div onChange={this.handleChange} value={this.props.skillsI} checked={this.props.skillsI}>
                 <label htmlFor="skillsI" value={this.props.skillsI}>Which skills do you have in your team (professional experience of at least 1 year, a Master or Bachelor degree or something similar)?</label><br/>
                <input type="checkbox" id="finance" name="skillsI" value="finance"/>
                <label for="finance">Finance</label><br/>

                <input type="checkbox" id="marketing" name="skillsI" value="marketing"/>
                <label for="marketing">Marketing</label><br/>

                <input type="checkbox" id="sales" name="skillsI" value="sales"/>
                <label for="sales">Sales</label><br/>

                <input type="checkbox" id="it" name="skillsI" value="it"/>
                <label for="it">IT/Tech</label>
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
