import React from "react";

export default class Q5teamMembers extends React.Component {
  handleChange = (event) => {
    this.props.setTeamMembers(event.target.value);
  };

  render() {
    return (
      <div
        onChange={this.handleChange}
        value={this.props.teamMembers}
        checked={this.props.teamMembers}
      >
        <label htmlFor="teamMembers">
          How many core team members do you have?
        </label>
        <br />
        <input type="radio" id="1" name="teamMembers" value="1" checked={this.props.teamMembers==='1'}/>
        <label for="1">1</label>
        <br />

        <input type="radio" id="2" name="teamMembers" value="2" checked={this.props.teamMembers==='2'}/>
        <label for="2">2</label>
        <br />

        <input type="radio" id="3" name="teamMembers" value="3" checked={this.props.teamMembers==='3'}/>
        <label for="3">3</label>
        <br />

        <input type="radio" id="4" name="teamMembers" value="4" checked={this.props.teamMembers==='4'}/>
        <label for="4">4</label>
        <br />

        <input type="radio" id="5orMore" name="teamMembers" value="5orMore" checked={this.props.teamMembers==='5orMore'}/>
        <label for="5orMore">5 or more</label>
        <br />
      </div>
    );
  }
}
