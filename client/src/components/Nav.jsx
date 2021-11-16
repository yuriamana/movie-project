import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./../styles/nav.css";
import { Container, Navbar, } from "react-bootstrap";

export default class Nav extends Component {
  state = {
    searchField: "",
    movies: [],
    stats: [],
  }
  
  render() {
    return (
      <Navbar bg="dark" expand="sm">
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
          {/* <Form className="search">
            <input type="text" placeholder="Search..." onChange={this.filterOnChange}/> 
            <Button type="submit" variant="outline-success" className="Sbutton">
              Search
            </Button>
          </Form> */}
          <Link to="/signin" className="login">
            Signin
          </Link>
          <Link to="/signup" className="login">
            Signup
          </Link>
        </Container>
      </Navbar>
    );
  }
}
