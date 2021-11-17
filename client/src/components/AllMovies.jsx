import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col, } from "react-bootstrap";
import "./../styles/AllMovies.css";
import { Link } from "react-router-dom";


export default function AllMovies({ movies }) {
  const copy = [...movies]
  copy.sort((() => {return Math.random()-0.5;}))
  return (
    <Container>
      <Row>
        {copy.map((movie, i) => (
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
