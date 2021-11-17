import React, { Component } from "react";
// import APIHandler from "./../api/APIHandler";
import { withAuth } from "./../auth/UserContext.js";

class MyAccount extends Component {
  state = {
    commentedMovies: [],
  };

  async componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        Commented movies
      </div>
    );
  }
}

export default withAuth(MyAccount); // HOC => encapsule ta classe et lui donne en props les infos de l'auth

//on veut display seulement les films que le user a commenté/raté
