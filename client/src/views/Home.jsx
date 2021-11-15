import React, { Component } from "react";
import Nav from "../components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Container,Col,Tabs,Tab } from 'react-bootstrap'
import './../styles/home.css';
import APIHandler from "./../api/APIHandler";
import { Link } from "react-router-dom";
import AllMovies from "../components/AllMovies";

export default class Home extends Component {
  state = {
    movies : [],
  }

async componentDidMount() {
  APIHandler.get("/movies")
    .then(({ data }) => {
      console.log("movies", data);
      this.setState({
        movies: data,
      });
    })
    .catch((apiErr) => console.error(apiErr));
}

  // componentDidMount() {
  //   this.fetchMovies();
  // }

  render(){
    const { movies } = this.state;
    console.log(movies)
    return (
      <div className="pagehome">
      <div>
      <Container>
      <Tabs defaultActiveKey = "profile" className="tabs">
      <Tab eventKey ="All" title="All">
        {movies.length && <AllMovies movies={movies} /> }
      </Tab>
      <Tab eventKey="Top" title="Top">
      
      </Tab>
      </Tabs>
      </Container>
      </div>
      </div>
  )} 
}

