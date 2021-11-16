import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../styles/home.css";
import APIHandler from "./../api/APIHandler";
import AllMovies from "../components/AllMovies";
// import TopMovies from "../components/TopMovies";

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
              <Tab eventKey="Top" title="Top">
              {/* {movies.length && <TopMovies movies={movies} />} */}

              </Tab>
            </Tabs>
            <Row>
              {movies.map((movie, i) => (
              <Col key={i} className="movieblock">
               <Link
              to={{
                pathname: `/movie/${movie._id}`,
                movieId: movie._id,
              }}
            >
              <img
                src={movie.image}
                alt="movies"
                width="180px"
                height="270px"
              />
            </Link>
          </Col>
        ))}
      </Row>
          </Container>
        </div>
      </div>
    );
  }
}
