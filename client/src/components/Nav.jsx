import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./../styles/nav.css";
import { Container, Navbar,Nav, NavDropdown } from "react-bootstrap";

export default class Navi extends Component {
  state = {
    searchField: "",
    movies: [],
    stats: [],
  }
  
  render() {
    return (
      <Navbar bg="dark" expand="sm">
        <Container>
            <Link to="/">
              <img
                src="/imag/movie logo.png"
                alt="movielogo"
                className="movielogo"
              />
            </Link>
            <span className="ourname">PYJ CINEMA</span>
          <Nav className="text-center mt-4 mb-4">
          <NavDropdown title="Dropdown" id="nav-dropdown" active="true" menuRole="menu">
          <NavDropdown.Item eventKey="4.1" href="/signin">Signin</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" href="/signup">Signup</NavDropdown.Item>
      </NavDropdown>
            <Nav.Link eventKey="disabled">
              About
            </Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
  }
}