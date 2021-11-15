import React, { Component } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import APIHandler from "./../api/APIHandler";
//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/home.css';
import { Row, Container, Col } from "react-bootstrap";

export default class Home extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    APIHandler.get("/api/movies")
      .then(({ data }) => {
        console.log("movies", data);
        this.setState({
          movies: data,
        });
      })
      .catch((apiErr) => console.error(apiErr));
  }
  render() {
    // console.log(Movies.image)

    return this.state.movies.map((movie, i) => (
      <Link
        to={{
          pathname: "/movie-detail",
          movieId: movie._id,
        }}
      >
        <img key={i} src={movie.image} alt="movies" width="200px"/>
      </Link>
    ));
  }
}