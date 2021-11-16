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
  };

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
    const { movies } = this.state;
    return (
      <div className="pagehome">
        <div>
          <Container>
            <Tabs defaultActiveKey="profile" className="tabs">
              <Tab eventKey="All" title="All">
                {movies.length && <AllMovies movies={movies} />}
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
