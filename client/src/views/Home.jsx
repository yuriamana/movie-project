import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Tabs, Tab,Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./../styles/home.css";
import APIHandler from "./../api/APIHandler";
import AllMovies from "../components/AllMovies";
import TopMovies from "../components/TopMovies";

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
        console.log("movies", data);
        this.setState({
          movies: data,
        });
      })
      .catch((apiErr) => console.error(apiErr));
  }

  render() {
    //Filter here 

    let moviesToDisplay = null

    if (this.state.searchString !== '' && this.state.movies.length > 0) {
      moviesToDisplay = this.state.movies.filter(movie => {
        return movie?.title?.toLowerCase()?.includes(this.state.searchString.toLowerCase())
      })
    } else {
      moviesToDisplay = [...this.state.movies]
    }
      return (
        <div>
        <Container>
        <Row>
          <Col md={8}>
          <input type="text" placeholder="Search..." className="inpSearch" onChange={(e) => this.handleSearch(e.target.value)}/> 
          </Col>
        </Row>
          <Tabs
            ActiveKey="eventKey"
            transition={true}
            id="noanim-tab-example"
            className="mb-3"
            mountOnEnter="true"
            variant='pills'
          >
            <Tab eventKey="home" title="Home">
              {moviesToDisplay.length && <AllMovies movies={moviesToDisplay} />}
            </Tab>
            <Tab eventKey="Top-Movies" title="Top">
              <TopMovies movies={(this.state.movies).splice(5,10)}/>
            </Tab>
          </Tabs>
          </Container>
        </div>
      );
    }
  }

