import React, { Component } from "react";
// import APIHandler from "../../api/APIHandler";

export default class FormRecommendation extends Component {
  state = {
    mood: [],
  };

  handleSubmit = (event) => {
    alert("Your mood is : " + this.state.value);
    event.preventDefault();
  }

  handleChange = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="label" htmlFor="mood">
          What is your mood ?
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Happy">Happy</option>
            <option value="Suicidal">Suicidal</option>
            <option value="Romantic">Romantic</option>
            <option value="Want to laugh">Want to laugh</option>
            <option value="Want to be scared">Want to be scared</option>
          </select>
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}
