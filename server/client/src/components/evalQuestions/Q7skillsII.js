import React from 'react';

export default class Q7skillsII extends React.Component{

    render(){
        return(
            <div>
                <input type="radio" id="yes" name="skillsII" value="yes"/>
                <label for="yes">Yes</label><br/>

                <input type="radio" id="no" name="skillsII" value="no"/>
                <label for="no">No</label><br/>
            </div>
            
        )
    }
}