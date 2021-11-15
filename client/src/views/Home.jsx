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
  APIHandler.get("/api/movies")
    .then(({ data }) => {
      console.log("movies", data);
      this.setState({
        movies: data,
      });
    })
    .catch((apiErr) => console.error(apiErr));
}

//   componentDidMount() {
//     this.fetchMovies();
//   }

  render(){
    const { movies } = this.state;

    return (
      <div className="pagehome">
      <Nav/>
      <div>
      <Container>
      <h1>Recommended for you</h1>
      <Tabs defaultActiveKey = "profile">
      <Tab eventKey ="All" title="All">
        <AllMovies/>
      </Tab>
      <Tab eventKey="Top" title="Top">
      
      </Tab>
      </Tabs>
        <ul>
        <Row>
          {movies.map((movie, i) => (
          <Link to={{
            pathname: "/movie-detail",
            movieId: movie._id,
            }}>
          <li className="item" key={i}>
            <Col sm={4} md={2} className="movieblock">
              <img key={i} src={movie.image} alt="movies" width="200px"/>
              <span>{movie.name}</span>
            </Col>
          </li>
          </Link>
          ))}
        </Row>
        </ul>
      </Container>
      </div>
      </div>
  )} 
}
// export default class Home extends Component {
//   state = {
//     movies: [],
//   };

//   async componentDidMount() {
//     APIHandler.get("/api/movies")
//       .then(({ data }) => {
//         console.log("movies", data);
//         this.setState({
//           movies: data,
//         });
//       })
//       .catch((apiErr) => console.error(apiErr));
//   }

//   render() {
//     // console.log(Movies.image)

//     return this.state.movies.map((movie, i) => (
//       <Link
//         to={{
//           pathname: "/movie-detail",
//           movieId: movie._id,
//         }}
//       >
//         <img key={i} src={movie.image} alt="movies" width="200px"/>
//       </Link>
//     ));
//   }}
