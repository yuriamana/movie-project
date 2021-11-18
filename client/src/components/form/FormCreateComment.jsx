import React, { Component } from "react";
import APIHandler from "../../api/APIHandler";

// comment recuperer le user connecte dans ce composqnt 
// pour envoyer le id_author dans le post /comments ?

export default class FormCreateComment extends Component {
  state = {
    inputText: "",
  };

  handleInputText = (val) => {
    this.setState({
      inputText: val.target.value,
    });
  };

  handleAddComment = (e) => {
    // console.log("here");
    let myComment = {
      comment: this.state.inputText,
      rate: "3",
      id_film: this.props.movieId,
      id_author: "618ffb3532facccdf54b37dc"
    };
    // console.log("be4 post");
    APIHandler.post("/comments", myComment)
      .then((res) => {
        // console.log("after post result");
        // passer l'info au parent (un comme nt a été ajouté )
        // le parent fetch tousles comments (les anciens + le nouveau) puis setState(comments)
        // du coup re-render et on peut afficher la liste des comments
        console.log(res);
        console.log(this.props);
        this.props.fetchAllComments(this.props.movieId);
      })
      .catch((apiErr) => console.error(apiErr));
    // console.log("after post");
  };

  render() {
    return (
      <div>
        <textarea
          rows={5}
          cols={30}
          onChange={(value) => this.handleInputText(value)}
        ></textarea>{" "}
        <br />
        <button onClick={() => this.handleAddComment()}>
          Add your comments
        </button>
      </div>
    );
  }
}
