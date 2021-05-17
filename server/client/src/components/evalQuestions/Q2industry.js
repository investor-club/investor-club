import React from 'react';

export default class Q2industry extends React.Component{
    handleSelect = (event) => {
        this.props.setIndustry(event.target.value);
        console.log(event.target);
    };

    render(){
        if(this.props.flag) {
            return (
                <div>
                <label htmlFor="industry">In which industry are you operating?</label><br/>
                <select id="industry" name="industry" onChange={this.handleSelect} value={this.props.industry}>
                    <option value="food">Food</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="financials">Financials</option>
                    <option value="mobility">Mobility</option>
                    <option value="energy">Energy</option>
                    <option value="education">Education</option>
                    <option value="space">Space</option>
                    <option value="media/advertising">Media/Advertising</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="robotics">Robotics</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="gaming,(cyber-)security">Gaming,(Cyber-)Security</option>
                    <option value="humanResources">Human Resources</option>
                    <option value="craft">Craft</option>
                    <option value="fashion">Fashion</option>
                    <option value="other">Other</option>

                </select>

                {/* <input 
                    type='text'
                id='industry'
                name='industry'
                placeholder='q2'
                value= {this.props.industry}
                onChange={this.handleChange}
                    // value=
                    // onChange=
                /> */}
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


