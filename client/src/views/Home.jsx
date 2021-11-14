import React, { Component } from "react";
import Nav from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css'
// import {Row, Container,Col,Tabs,Tab } from 'react-bootstrap'
import './home.css';
// import APIHandler from "./../api/APIHandler";


// export default class Home extends Component {
//   state = {
//     movies : [],
//   }

//   fetchMovies = async () => {
//     APIHandler.get("/api/movies")
//       .then(({ data }) => {
//         this.setState({
//           movies: data,
//         });
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   componentDidMount() {
//     this.fetchMovies();
//   }

//   render(){
//     const { movies } = this.state;

//     return (
//       <div className="pagehome">
//       <Nav/>
//       <div>
//       <Container>
//       <h1>Recommended for you</h1>
//       <Tabs defaultActiveKey = "profile">
//       <Tab eventKey ="New" title="New">

//       </Tab>
//       <Tab eventKey="Top" title="Top">
      
//       </Tab>
//       </Tabs>
//         <ul>
//         <Row>
//           {movies.map((movie, i) => (
//         <li className="item" key={i}>
//           <Col sm={4} md={2} className="movieblock">
//               <span>{movie.name}</span>
//           </Col>
//           </li>
//           ))}
//           {/* <Col sm={4} md={2} className="movieblock">
//             2
//           </Col>
//           <Col sm={4} md={2} className="movieblock">
//             3
//           </Col>
//           <Col sm={4} md={2} className="movieblock">
//             4
//           </Col>
//           <Col sm={4} md={2} className="movieblock">
//             5
//           </Col>  */}
//         </Row>
//         </ul>
//       </Container>
//       </div>

//       </div>
//     );
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