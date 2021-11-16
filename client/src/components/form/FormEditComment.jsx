import React, { Component } from "react";
import APIHandler from "../../api/APIHandler";

export default class FormEditComment extends Component {
  state= {
      inputText:""
  }

  handleInputText = (val) => {
    console.log(val);
    this.inputText = val.target.value;
  };

  handleEditComment = () => {
    // console.log("here");
    let myEditedComment = {
      comment: this.inputText,
      rate: "",
      id_film: this.props.movieId,
      id_author: "",
    };
    // console.log("be4 post");
    APIHandler.patch("/comments/edit", myEditedComment)
      .then((res) => {
        // console.log("after post result");
        console.log(res);
      })
      .catch((apiErr) => console.error(apiErr));
    // console.log("after post");
  };

  handleChange = (evt) => {
        this.setState({
          [evt.target.inputText]: evt.target.value
        });
      }; 

  render() {
    return (
      <div>
        <textarea
          rows={5}
          cols={30}
          onChange={(value) => this.handleInputText(value)}
        ></textarea>
        <button onClick={() => this.handleEditComment()}>
          Edit your comments
        </button>
      </div>
    );
  }
}
