import React, {Component} from "react"; 
import APIHandler from "./../api/APIHandler"; 

export default class MyAccount extends Component {
    state = {
      commentedMovies: [],
    };
  
    async componentDidMount() {
      APIHandler.get("/movies/:id")
      
        .then(({ data }) => {
          console.log("commentedMovies", data);
          this.setState({
            commentedMovies: data,
          });
        })
        .catch((apiErr) => console.error(apiErr));
    }
    render() {
        return (
            <div>Commented movies
            this.state.commentedMovies.map(movie => {

            })
            </div>
        )
    }
}

// //on veut display seulement les films que le user a commenté/raté
