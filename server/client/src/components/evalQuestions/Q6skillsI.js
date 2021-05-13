import React from 'react';

export default class Q6skillsI extends React.Component{

    render(){
        return(
            <div>
                <input type="radio" id="finance" name="skillsI" value="finance"/>
                <label for="finance">Finance</label><br/>

                <input type="radio" id="marketing" name="skillsI" value="marketing"/>
                <label for="marketing">Marketing</label><br/>

                <input type="radio" id="sales" name="skillsI" value="sales"/>
                <label for="sales">Sales</label><br/>

                <input type="radio" id="it" name="skillsI" value="it"/>
                <label for="it">IT/Tech</label>
            </div>
            
        )
    }
}