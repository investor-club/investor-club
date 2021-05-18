import React from "react";

export default class Q4foundation extends React.Component {
  handleChange = (event) => {
    this.props.setFoundation(event.target.value);
  };

  render() {
    return (
      <div
        onChange={this.handleChange}
        value={this.props.foundation}
        checked={this.props.foundation}
      >
        <label htmlFor="foundation">Is your company already founded? </label>
        <br />
        <input type="radio" id="yes" name="foundation" value="yes" checked={this.props.foundation==='yes'}/>
        <label for="yes">Yes</label>
        <br />

        <input type="radio" id="no" name="foundation" value="no" checked={this.props.foundation==='no'}/>
        <label for="no">No</label>
        <br />
      </div>
    );
  }
}
