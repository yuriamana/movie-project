import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col, Spinner } from "react-bootstrap";
import "./../styles/AllMovies.css";
import { Link } from "react-router-dom";


export default function TopMovies({ movies }) {
    if(!movies) return 
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
    </Spinner>
    const copy = [...movies]
    copy.sort((a, b) => b.imDbRating.localeCompare(a.imDbRating))
        return (
    <Container>
      <Row>
        {copy.map((movie , i) => (
          <Col key={i} className="movieblock">

            <Link
              to={{
                pathname: `/movie/${movie._id}`,
                movieId: movie._id,
              }}
            >
              <img
                src={movie.image}
                alt="movies"
                width="180px"
                height="270px"
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
