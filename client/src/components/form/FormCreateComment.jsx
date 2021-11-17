import React, { Component } from "react";
import APIHandler from "../../api/APIHandler";

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
    };
    // console.log("be4 post");
    APIHandler.post("/comments/create", myComment)
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
