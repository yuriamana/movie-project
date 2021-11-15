// import React, { Component } from "react";
// import APIHandler from "../../api/handler";

// export default class CreateComment extends Component {
//     constructor(props) {
//         super(props); // MANDATORY !!!!
//         this.state = {            
//             comment: "",
//             rate: "",
//             id_film: this.props.movieId,
//             id_author: "618ffb3532facccdf54b37dc",
//         };
//       }; 

// ComponentDidMount = async () => {
//     try {
//     const responseUsers = await APIHandler.get("/api/users");
//     const responseMovies = await APIHandler.get("/api/movies"); 
//     this.setState({
//         users: responseUsers.data[0]._id,
//         films:responseMovies.data[0]._id,
//     })
//     } catch (error) {console.error(error)}
// }

// handleInputText = async (evt) => {
//     evt.preventDefault(); 
//     this.comment = evt.target.value;

//     try {
//         await APIHandler.post("/api/comments/create"); 
//       } catch (err) {
//         console.error(err);
//       }
//     };

// handleChange = (evt) => {
//     this.setState({
//         [evt.target.name]: evt.target.value
//     });
// };

// render () {
//     return(
//         <> 
//         <h2>Create a new comment</h2>

//         <form className = "form">

//         <label className="label" htmlFor="comment">
//             Comment
//         </label>
//         <input
//           className="input"
//           name="comment"
//           type="text"
//           value={this.state.comment}
//           onChange={this.handleChange}
//         />

//         <label className="label" htmlFor="rate">
//               Rate
//         </label>
//         <input
//           className="input"
//           name="rate"
//           type="text"
//           placeholder="Would you recommend this movie to anyone?"
//           value={this.state.rate}
//           onChange={this.handleChange}
//         />
       
//         <button className="btn" onClick={this.handleInputText}>ok</button>

//         </form>
//         </>
//     )
// }

// }



// // id_author: { type: Schema.Types.ObjectId, ref: "user" },
// // id_film: { type: Schema.Types.ObjectId, ref: "movie" },