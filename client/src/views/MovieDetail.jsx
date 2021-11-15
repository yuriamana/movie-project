import React, { Component } from "react";
import APIHandler from "./../api/APIHandler";
import FormCreateComment from "../components/form/FormCreateComment";

export default class MovieDetail extends Component {
  state = {
    title: "",
    year: "",
    image: "",
    director: "",
    duration: "",
    plot: "",
    actors: [
      {
        image: "",
        name: "",
      },
    ],
    genre: [
      {
        value: "",
      },
    ],
    imDbRating: "",
    usersRating: "",
  };

  async componentDidMount() {
    console.log(this);
    console.log(this.props.location.movieId);
    //this.props are properties you give to an object when you create so you can access/use them
    //for ex Link with a props "to=" create a new object (movie detail) and provide its properties
    APIHandler.get(`/api/movies/${this.props.location.movieId}`)
      .then(({ data }) => {
        console.log("movies", data);
        this.setState({
          title: data.title,
          year: data.year,
          director: data.directors,
          duration: data.runtimeMins,
          plot: data.plot,
          image: data.image,
          // actors: data.name.actorList,
          //   genre: [data.genreList],
          imDbRating: data.imDbRating,
          usersRating: data.usersRating,
        });
      })
      .catch((apiErr) => console.error(apiErr));
  }
  render() {
    return (
      <div>
        <h3>Title: {this.state.title}</h3>
        <img src={this.state.image} alt="one-movie" width="200px" />
        <span>Year: {this.state.year}</span>
        <br />
        <span>Director: {this.state.director}</span>
        <br />
        <span>Duration: {this.state.duration}</span>
        <br />
        <span>Plot: {this.state.plot}</span>
        <br />
        {/* <span>Actors: {this.state.actors}</span>
        <br />
        <span>Genre: {this.state.genre}</span>
        <br /> */}
        <span>IMDB rating: {this.state.imDbRating}</span>
        <br />
        <span>User's rating: {this.state.usersRating}</span>
        <br />
        <FormCreateComment movieId={this.props.location.movieId} />
      </div>
    );
  }
}
