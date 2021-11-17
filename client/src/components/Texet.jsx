import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col, Pagination } from "react-bootstrap";
import "./../styles/AllMovies.css";
import { Link } from "react-router-dom";

export default class Texet extends Component {
  state = {
    movies: null,
  };

  async componentDidMount() {
    console.log(this.props);
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + this.props.match.params.name
      );
      // console.log("res.data");
      console.log(res.data , this.props);
      this.setState({
        pokemon: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { pokemon } = this.state; // destructuring here !!!

    return !pokemon ? (
      <p>loading</p>
    ) : (
      <div>
        <h1>Pokemon detail</h1>
        <p>{pokemon.name}</p>
        <p>experience {pokemon.base_experience}</p>
        <img src={pokemon.sprites.front_default} alt="yolo" />
        <img src={pokemon.sprites.back_default} alt="yolo" />
      </div>
    );
  }
}
