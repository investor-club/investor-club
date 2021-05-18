import React from 'react';

export default class Q6skillsI extends React.Component{

    state = {
        finance: false,
        marketing: false,
        sales: false,
        it: false,
    }
    handleChange = async (e) => {
        
        const name = e.target.name;
        
        await this.setState(state => ({
            [name]: !state[name]   //this works
            }))
            const skills=[];
            for (let key in this.state) {
            this.state[key] === true && skills.push(key)
            }
            console.log("CHILD: ", skills)
            this.props.setSkillsI(skills); //lift up   
    };

    render(){
            return (
                // <div onChange={this.handleChange} value={this.props.skillsI} >
                <div>
                <h3>Which skills do you have in your team (professional experience of at least 1 year, a Master or Bachelor degree or something similar)?</h3>
                <input type="checkbox" id="finance" name="finance"  checked={this.state.finance} onChange={this.handleChange}/>
                <label htmlFor="finance">Finance</label><br/>

                <input type="checkbox" id="marketing" name="marketing"  checked={this.state.marketing} onChange={this.handleChange}/>
                <label htmlFor="marketing">Marketing</label><br/>

                <input type="checkbox" id="sales" name="sales" checked={this.state.sales} onChange={this.handleChange}/>
                <label htmlFor="sales">Sales</label><br/>

                <input type="checkbox" id="it" name="it" checked={this.state.it} onChange={this.handleChange}/>
                <label htmlFor="it">IT/Tech</label>
            </div>
                )
      }     
}
