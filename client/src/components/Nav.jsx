import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./../styles/nav.css";
import { Container, Navbar,Nav } from "react-bootstrap";

export default class Navi extends Component {
  state = {
    searchField: "",
    movies: [],
    stats: [],
  }
  
  render() {
    return (
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="/imag/movie logo.png"
                alt="movielogo"
                className="movielogo"
              />
            </Link>
          </Navbar.Brand>
          <Nav className="text-center mt-4 mb-4">
          <Nav.Item className="login">
            <Nav.Link href="/signin">Signin</Nav.Link>
          </Nav.Item>
          <Nav.Item className="login">
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              About
            </Nav.Link>
        </Nav.Item>
        </Nav>
        </Container>
      </Navbar>
    );
  }
}
