import React, { Component } from "react";
import APIHandler from "../../api/handler";

export default class Comment extends Component {
    constructor(props) {
        super(props); // MANDATORY !!!!
        this.state = {            
            comment: "",
            rate: "",
            users: [],
            films:[],
        };
      }; 

 
ComponentDidMount = async () => {
        try {
        const commentInfo = await APIHandler.get("/api/comments/" + this.props.match.params.id);
        const responseUsers = await APIHandler.get("/api/users");
        const responseMovies = await APIHandler.get("/api/movies"); 
        this.setState({
            comment: commentInfo.data.comment,
            rate: commentInfo.data.rate,
            users: responseUsers.data[0]._id,
            films: responseMovies.data[0]._id,
        })
        } catch (error) {console.error(error)}
    }
 
handleSubmit = async (evt) => {
        evt.preventDefault(); 
 
    try {
            await APIHandler.patch("/api/movies/" + this.props.match.params.id + "/edit"); 
          } catch (err) {
            console.error(err);
          }
        };
      
handleChange = (evt) => {
          this.setState({
            [evt.target.name]: evt.target.value
          });
        }; 
 
render () {
            return (
            <>
            <h2>Edit this album</h2>
        
              <form className="form">
              <label className="label" htmlFor="comment">
            Comment
        </label>
        <input
          className="input"
          name="comment"
          type="text"
          value={this.state.comment}
          onChange={this.handleChange}
        />

        <label className="label" htmlFor="rate">
              Rate
        </label>
        <input
          className="input"
          name="rate"
          type="text"
          placeholder="Would you recommand this movie to anyone?"
          value={this.state.rate}
          onChange={this.handleChange}
        />
       
        <button className="btn" onClick={this.handleSubmit}>Edit</button>

        </form>
        </>
    ) }
}
 
 
 
 
//  id_author: { type: Schema.Types.ObjectId, ref: "user" },
//  id_film: { type: Schema.Types.ObjectId, ref: "movie" },
//  comment: {
//      type: String,
//      maxlength: 500
//  },
//  rate: String