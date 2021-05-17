import React from 'react';

export default class Q3stage extends React.Component{
    handleChange = (event) => {
        this.props.setStage(event.target.value);
    };

    render(){
        if(this.props.flag) {
            return (
                <div onChange={this.handleChange} value={this.props.stage} checked={this.props.stage}>
                <label htmlFor="stage">In what stage is your idea?</label><br/>
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
        } else {
            return (
            <>
            </>
             )
          }
      }     
}

