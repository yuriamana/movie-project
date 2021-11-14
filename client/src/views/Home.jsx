import React, { Component } from "react";
import Nav from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import APIHandler from "./../api/APIHandler";

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