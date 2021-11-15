import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col } from "react-bootstrap";
import "./../styles/AllMovies.css";
import { Link } from "react-router-dom";

export default function AllMovies({ movies }) {
  return (
    <Container>
      <Row>
        {movies.map((movie, i) => (
          <Link
            key={i}
            to={{
              pathname: "/movie-detail",
              movieId: movie._id,
            }}
          >
            <Col sm={4} md={2} className="movieblock">
              <img src="{movies.images}" alt="movies" width="200px" />
              <h4>{movies.title}</h4>
            </Col>
          </Link>
        ))}
      </Row>
    </Container>
  );
}
