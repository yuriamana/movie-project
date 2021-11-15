import React, { Component } from "react";
import APIHandler from "../api/APIHandler";

export default class FormCreateComment extends Component {
    
  inputText = "";

  handleInputText = (val) => {
    console.log(val);
    this.inputText = val.target.value;
  };

  handleAddComment = () => {
    console.log("here");
    let myComment = {
      comment: this.inputText,
      rate: "3",
      id_film: this.props.movieId,
      id_author: "618ffb3532facccdf54b37dc",
    };
    console.log("be4 post");
    APIHandler.post("api/comments/create", myComment)
      .then((res) => {
        console.log("after post result");
        console.log(res);
      })
      .catch((apiErr) => console.error(apiErr));
    console.log("after post");
  };
  render() {
    return (
      <div>
        <textarea
          rows={5}
          cols={30}
          onChange={(value) => this.handleInputText(value)}
        ></textarea> <br />
        <button onClick={() => this.handleAddComment()}>
          Add your comments
        </button>
      </div>
    );
  }
}
