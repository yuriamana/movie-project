import React, { Component } from "react";
import APIHandler from "../../api/handler";

export default class CreateComment extends Component {
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
    const responseUsers = await APIHandler.get("/api/users");
    const responseMovies = await APIHandler.get("/api/movies"); 
    this.setState({
        user: responseUsers.data[0]._id,
        film:responseMovies.data[0]._id,
    })
    } catch (error) {console.error(error)}
}

handleSubmit = async (evt) => {
    evt.preventDefault(); 

    try {
        await APIHandler.post("/api/comments/create"); 
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
    return(
        <> 
        <h2>Create a new comment</h2>

        <form className = "form">

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
       
        <button className="btn" onClick={this.handleSubmit}>ok</button>

        </form>
        </>
    )
}

}



// id_author: { type: Schema.Types.ObjectId, ref: "user" },
// id_film: { type: Schema.Types.ObjectId, ref: "movie" },