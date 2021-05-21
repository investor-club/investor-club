import React from "react";

export default class Q7skillsII extends React.Component {
  handleChange = (event) => {
    this.props.setSkillsII(event.target.value);
  };

  render() {
    return (
      <div
        onChange={this.handleChange}
        value={this.props.skillsII}
        className="setHeight"
      >
        <label htmlFor="skillsII" value={this.props.stage} className="questionHeader">
          Do you have all the necessary skills in your team to develop the idea?
        </label>
        <br />
          <div>
          <input type="radio" id="yes" name="skillsII" value="yes" checked={this.props.skillsII==='yes'} />
          <label for="yes">Yes</label>
          <br />

          <input type="radio" id="no" name="skillsII" value="no" checked={this.props.skillsII==='no'} />
          <label for="no">No</label>
          <br />
        </div>
      </div>
    );
  }
}
