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
    const {finance, marketing, sales, it} = this.state;
    return (
      <div
        onChange={this.handleChange}
        className="setHeight"
      >
        <label htmlFor="finance" value={this.props.stage} className="questionHeader">
          If "No", which skills are you looking for?
        </label>
        <br />
        <div>
          <input type="checkbox" id="finance" name="skillsIII" value="finance" checked={finance}/>
          <label htmlFor="finance">Finance</label>
          <br />

          <input
            type="checkbox"
            id="marketing"
            name="skillsIII"
            value={this.state.marketing}
            checked={marketing}
          />
          <label htmlFor="marketing">Marketing</label>
          <br />

          <input type="checkbox" id="sales" name="skillsIII" value="sales" checked={sales}/>
          <label htmlFor="sales">Sales</label>
          <br />

          <input type="checkbox" id="it" name="skillsIII" value="it" checked={it}/>
          <label htmlFor="it">IT/Tech</label>
        </div>
      </div>
    );
  }
}
