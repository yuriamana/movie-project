import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Container,Col, } from 'react-bootstrap'
import './../styles/AllMovies.css';
import { Link } from "react-router-dom";

export default class AllMovies extends Component {
    state = {
      movies : [],
    }

    render(){
        return(
        <ul>
        <Row>
          {this.state.movies.map((movie, i) => (
          <Link to={{
            pathname: "/movie-detail",
            movieId: movie._id,
            }}>
          <li className="item" key={i}>
            <Col sm={4} md={2} className="movieblock">
              <img src={this.props.images} alt="movies" width="200px"/>
              <h4>{this.props.title}</h4>
            </Col>
          </li>
          </Link>
          ))}
        </Row>
        </ul>
        )
    }
}