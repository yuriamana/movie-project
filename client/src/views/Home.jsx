import React, { Component } from "react";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

export default class Home extends Component {
  state = {};
  render() {
    // console.log(Movies.image)

    return (
      <div className="pagehome">
        <Nav />
        <h1>Recommended for you</h1>

        <div>
          <Container>
            <Row>
              <Col className="movieblock">
                <Link to="/movie-detail">1</Link>
              </Col>
              <Col className="movieblock">2</Col>
              <Col className="movieblock">3</Col>
              <Col className="movieblock">4</Col>
              <Col className="movieblock">5</Col>
              <Col className="movieblock">6</Col>
            </Row>
            <Row>
              <Col className="movieblock">1</Col>
              <Col className="movieblock">2</Col>
              <Col className="movieblock">3</Col>
              <Col className="movieblock">4</Col>
              <Col className="movieblock">5</Col>
              <Col className="movieblock">6</Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
