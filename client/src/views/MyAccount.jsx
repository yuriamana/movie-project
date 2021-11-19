import React, { Component } from "react";
// // import APIHandler from "./../api/APIHandler";
// // import { withAuth } from "./../auth/UserContext.js";
// import { Link, Redirect } from "react-router-dom";
// // custom tools
import { Container } from "react-bootstrap";
// import APIHandler from "../api/APIHandler";
import IconAvatarAdmin from "../components/icon/IconAvatarAdmin";
import { withAuth } from "../auth/UserContext";
// // styles
// import "./../styles/form.css";
// import "./../styles/icon-avatar.css";

class MyAccount extends Component {
  state = {
    avatar: "",
    tmpAvatar: "/imag/Avatar.jpeg",
    username: "admin",
    email: "admin@foobarbaz.io",
    password: "12345",
  };
   


  render() {
    const { email, password, username, tmpAvatar } = this.state;

    return (
    
    <Container>
       <h1 className="title">My Account</h1>

        <label className="label" id="avatar" htmlFor="avatar">
         <IconAvatarAdmin avatar={this.state.tmpAvatar} />
        </label>

        <p className="label" htmlFor="email">
           {this.state.email} 
        </p>
     
        <p className="label" htmlFor="username">
          {this.state.username}
        </p>
        

    </Container>
   );
  }
}

export default withAuth(MyAccount) // HOC => encapsule ta classe et lui donne en props les infos de l'auth

// //on veut display seulement les films que le user a commenté/raté
