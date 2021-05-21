import React from "react";

export default class Q8skillsIII extends React.Component {
  state = {
    skillsIII: this.props.skillsIII,
    finance: false,
    marketing: false,
    sales: false,
    it: false,
}
  handleChange = (event) => {
    this.props.setSkillsIII(event.target.value);
  };

  componentDidMount () {
    for (let key in this.state) {
        if (this.state.skillsIII.includes(key)) {
           this.setState({
               [key]: true
           })
        }
    }
  }

  render() {
    return (
      <div
        onChange={this.handleChange}
        value={this.props.skillsIII}
        checked={this.props.skillsIII}
        className="setHeight"
      >
        <label htmlFor="finance" value={this.props.stage} className="questionHeader">
          If "No", which skills are you looking for?
        </label>
        <br />
        <div>
          <input type="checkbox" id="finance" name="skillsIII" value="finance" />
          <label for="finance">Finance</label>
          <br />

          <input
            type="checkbox"
            id="marketing"
            name="skillsIII"
            value="marketing"
          />
          <label for="marketing">Marketing</label>
          <br />

          <input type="checkbox" id="sales" name="skillsIII" value="sales" />
          <label for="sales">Sales</label>
          <br />

          <input type="checkbox" id="it" name="skillsIII" value="it" />
          <label for="it">IT/Tech</label>
        </div>
      </div>
    );
  }
}
