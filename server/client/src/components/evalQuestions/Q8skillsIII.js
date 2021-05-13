import React from 'react';

export default class Q8skillsIII extends React.Component{

    render(){
        return(
            <div>
                <input type="radio" id="finance" name="skillsIII" value="finance"/>
                <label for="finance">Finance</label><br/>

                <input type="radio" id="marketing" name="skillsIII" value="marketing"/>
                <label for="marketing">Marketing</label><br/>

                <input type="radio" id="sales" name="skillsIII" value="sales"/>
                <label for="sales">Sales</label><br/>

                <input type="radio" id="it" name="skillsIII" value="it"/>
                <label for="it">IT/Tech</label>
            </div>
            
        )
    }
}