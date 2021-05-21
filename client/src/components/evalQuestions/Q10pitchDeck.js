import React from "react";

export default class Q9experience extends React.Component {

  handleChange = (event) => {
    console.log(event.target.value)

    // this.props.setPitchDeck(event.target.value);
  };

  render() {
    return (
      <div className="setHeight">
        <label htmlFor="pitchDeck"  className="questionHeader" >
          If you have a Pitch Deck you can upload it here:
        </label>
        <br />
        <input
          type="text"
          id="pitchDeck"
          name="pitchDeck"
          // value={this.props.pitchDeck}
          onChange={e => this.handleChange(e)}
        />
        <input type="file" onChange={e => this.props.handleFileUpload(e)} />
      </div>
    );
  }
}
