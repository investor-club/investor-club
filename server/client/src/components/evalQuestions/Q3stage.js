import React from 'react';

export default class Q3stage extends React.Component{

    render(){
        return(
            <div>
                <input type="radio" id="stageI" name="stage" value="stageI"/>
                <label for="stageI">Prototype/MVP (Pre-Seed)</label><br/>

                <input type="radio" id="stageII" name="stage" value="stageII"/>
                <label for="stageII">Proof of Concept (Pre-Seed)</label><br/>

                <input type="radio" id="stageIII" name="stage" value="stageIII"/>
                <label for="stageIII">First Paying Customers (Seed)</label><br/>

                <input type="radio" id="stageIV" name="stage" value="stageIV"/>
                <label for="stageIV">beyond the mentioned ones</label>
            </div>
            
        )
    }
}