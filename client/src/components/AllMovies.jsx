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
            <Col className="movieblock">
          <Link
            key={i}
            to={{
              pathname: `/movie/${movie._id}`,
              movieId: movie._id,
            }}
          >
              <img src={movie.image} alt="movies" width="180px" height="270px" />
          </Link>
            </Col>
        ))}
      </Row>
    </Container>
  );
}