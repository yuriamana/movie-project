import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./../styles/nav.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { withAuth } from "../auth/UserContext";
import IconAvatarAdmin from "../components/icon/IconAvatarAdmin";

class Navi extends Component {
  state = {
    searchField: "",
    movies: [],
    stats: [],
    tmpAvatar:"/imag/Avatar.jpeg"
  }
  
  render() {
    console.log(withAuth.tmpAvatar);
    const { currentUser } = withAuth();

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
            
            <span className="ourname">CINEHOME</span>

          <Nav className="text-center mt-4 mb-4">
          {!this.props.userContext?.isLoggedIn ? 
          (<Link to="/signin" className="Signin">Signin</Link>) 
          : (<Link to="/dashboard" className="myaccount">
            <Link to="/signout" className="signout">Signout</Link> 
            <IconAvatarAdmin avatar = {this.state.tmpAvatar} />
            </Link>)}
          </Nav>

        </Container>
      </Navbar>
    );
  }
}

export default withAuth(Navi)