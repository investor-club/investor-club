import React from "react";

export default class Q3stage extends React.Component {
  handleChange = (event) => {
    this.props.setStage(event.target.value);
  };

  render() {
    return (
      <div
        onChange={this.handleChange}
        value={this.props.stage}
        checked={this.props.stage}
      >
        <label htmlFor="stage">In what stage is your idea?</label>
        <br />
        <div class="answerRadio">
          <input type="radio" id="Prototype" name="stage" value="prototype" checked={this.props.stage==='prototype'}/>
          <label for="prototype">Prototype/MVP (Pre-Seed)</label>
          <br />

          <input type="radio" id="Concept" name="stage" value="concept" checked={this.props.stage==='concept'} />
          <label for="concept">Proof of Concept (Pre-Seed)</label>
          <br />

          <input type="radio" id="Customers" name="stage" value="customers" checked={this.props.stage==='customers'}/>
          <label for="paying customers">First Paying Customers (Seed)</label>
          <br />

          <input type="radio" id="beyond" name="stage" value="beyond" checked={this.props.stage==='beyond'}/>
          <label for="beyond">beyond the mentioned ones</label>
        </div>
      </div>
    );
  }
}
