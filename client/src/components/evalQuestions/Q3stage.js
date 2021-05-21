import React from "react";

export default class Q3stage extends React.Component {
  handleChange = (event) => {
    this.props.setStage(event.target.value);
  };

  render() {
    return (
      <div onChange={this.handleChange} value={this.props.stage} checked={this.props.stage} className="setHeight">
        <label htmlFor="stage" className="questionHeader">In what stage is your idea?</label>
        <br />
        <div class="answerRadio">
          <label for="prototype">
            <input type="radio" id="Prototype" name="stage" value="prototype" checked={this.props.stage==='prototype'}/>
            Prototype/MVP (Pre-Seed)
          </label>
          <br />
          <label for="concept">
            <input type="radio" id="Concept" name="stage" value="concept" checked={this.props.stage==='concept'} />
            Proof of Concept (Pre-Seed)
          </label>
          <br />
          <label for="paying customers">
            <input type="radio" id="Customers" name="stage" value="customers" checked={this.props.stage==='customers'}/>
            First Paying Customers (Seed)
          </label>
          <br />
          <label for="beyond">
            <input type="radio" id="beyond" name="stage" value="beyond" checked={this.props.stage==='beyond'}/>
            beyond the mentioned ones
          </label>
        </div>
      </div>
    );
  }
}
