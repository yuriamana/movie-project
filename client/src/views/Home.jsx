import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Tabs, Tab } from "react-bootstrap";
import "./../styles/home.css";
import APIHandler from "./../api/APIHandler";
import AllMovies from "../components/AllMovies";

export default class Home extends Component {
  state = {
    movies: [],
    searchString: ''
  };
  handleSearch = (text) => {
    this.setState({searchString: text})
  }
  async componentDidMount() {
    APIHandler.get("/movies")
      .then(({ data }) => {
        // console.log("movies", data);
        this.setState({
          movies: data,
        });
      })
      .catch((apiErr) => console.error(apiErr));
  }

  render() {
    //Filter here 

    let moviesToDisplay = null
    console.log(this.state.searchString)
    if (this.state.searchString !== '' && this.state.movies.length > 0) {
      moviesToDisplay = this.state.movies.filter(movie => {
        return movie?.title?.toLowerCase()?.includes(this.state.searchString.toLowerCase())
      })
    } else {
      moviesToDisplay = [...this.state.movies]
    }

    return (
      <div className="pagehome">
      <input type="text" placeholder="Search..." onChange={(e) => this.handleSearch(e.target.value)}/> 
        <div>
          <Container>
            <Tabs defaultActiveKey="profile" className="tabs">
              <Tab eventKey="All" title="All">
                {moviesToDisplay.length && <AllMovies movies={moviesToDisplay} />}
              </Tab>
              <Tab eventKey="Top" title="Top"></Tab>
            </Tabs>
          </Container>
        </div>
      </div>
    );
  }
}
