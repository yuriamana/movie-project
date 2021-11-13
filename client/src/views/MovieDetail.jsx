import React, { Component } from "react";
import APIHandler from "./../api/APIHandler";

export default class Movie_Detail extends Component {
  state = {
    title: "",
    year: "",
    director: "",
    duration: ""
  };

  async componentDidMount() {
    APIHandler.get("/api/movies/618f7e7b069d4357e301042b")
      .then(({ data }) => {
        console.log("movies", data);
        this.setState({
          title: data.title,
          year: data.year,
          director: data.directors,
          duration: data.runtimeMins
        });
      })
      .catch((apiErr) => console.error(apiErr));
  }
  render() {
    return (
      <div>
        <h1>Movie details...</h1>
        <span>Title:{this.state.title}</span>
        <br />
        <span>Year:{this.state.year}</span>
        <br />
        <span>Director:{this.state.director}</span>
        <br />
        <span>Duration: {this.state.duration}</span>
      </div>
    );
  }
}
