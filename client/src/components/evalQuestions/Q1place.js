import React from "react";

export default class Q1place extends React.Component {
  handleChange = (event) => {
    this.props.setPlace(event.target.value);
  };

  render() {
    return (
      <div className="setHeight">
        <label htmlFor="place" className="questionHeader">Where are you located? </label>
        <br />
        <input
          type="text"
          id="place"
          name="place"
          value={this.props.place}
          onChange={this.handleChange}
          
        />
      </div>
    );
  }
}
