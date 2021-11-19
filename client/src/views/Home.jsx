import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Tabs, Tab,Row, Col, Spinner } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./../styles/home.css";
import APIHandler from "./../api/APIHandler";
import AllMovies from "../components/AllMovies";
import TopMovies from "../components/TopMovies";
import Nouveux from "../components/Nouveux";

export default class Home extends Component {
  state = {
    movies: [],
    searchString: '',
  };
  handleSearch = (text) => {
    this.setState({searchString: text})
  }
  async componentDidMount() {
    APIHandler.get("/movies")
      .then(({ data }) => {
        console.log("movies", data.length);
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
            || movie?.actor?.toLowerCase()?.includes(this.state.searchString.toLowerCase())
      })
    } else {
      moviesToDisplay = [...this.state.movies]
    }
      return (
        <div>
        {!this.state.movies.length? (
          <div className="jiazai">
          Waiting  
            <Spinner animation="grow" variant="dark" size="sm"/>
            <Spinner animation="grow" variant="dark" size="sm"/>
            <Spinner animation="grow" variant="dark" size="sm"/>
            <Spinner animation="grow" variant="dark" size="sm"/>
            <Spinner animation="grow" variant="dark" size="sm"/>
          </div>
        ) :(
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
            <Tab eventKey="New" title="New">
              <Nouveux movies={this.state.movies}/>
            </Tab>
            <Tab eventKey="Top-Movies" title="Top">
              <TopMovies movies={this.state.movies}/>
            </Tab>
            <Tab eventKey="home" title="All">
              {moviesToDisplay.length && <AllMovies movies={moviesToDisplay} />}
            </Tab>
          </Tabs>
          </Container>
        )}
        </div>
      );
    }
  }

