import React, { Component } from "react";
import APIHandler from "./../api/APIHandler";
import { Container, Row, Col } from "react-bootstrap";
import './../styles/MovieDetail.css';
import FormCreateComment from "../components/form/FormCreateComment";
import LikeButton from "../components/LikeButton";
// import './../styles/LikeButton.css';

export default class MovieDetail extends Component {
  state = {
    title: "",
    year: "",
    image: "",
    director: "",
    duration: "",
    plot: "",
    actorList: [{
        image: "",
        name: ""
    }],
    genreList: [{
        value: "",
      },
    ],
    imDbRating: "",
    usersRating: "",
  };

  async componentDidMount() {
    // console.log(this)
    //   console.log(this.props.location.movieId)
//this.props are properties you give to an object when you create so you can access/use them
//for ex Link with a props "to=" create a new object (movie detail) and provide its properties
  APIHandler.get(`/movie/${this.props.match.params.id}`)
    .then(({ data }) => {
        this.setState({
          title: data.title,
          year: data.year.split(0,1),
          director: data.directors,
          duration: data.runtimeMins,
          plot: data.plot,
          image: data.image,
          actorList: data.actorList,
          genreList: data.genreList,
          imDbRating: data.imDbRating,
          usersRating: data.usersRating,
        });
      })
      .catch((apiErr) => console.error(apiErr));
    }
    render() {
      // console.log(this.props)
      // console.log(this.state.actorList);
      return (
        <Container>
        <br/>
        <h1>Title: {this.state.title} </h1> <span>({this.state.year})</span>
        <br/>
        <Row className="bodydetail">
          <Col className="colImag">
            <img src={this.state.image} alt="one-movie" width="200px"/>
          </Col>  

          <Col>
            <span>Director: {this.state.director}</span>
            <br />
            <span>Duration: {this.state.duration}min</span>
            <br />
            <br />
            <span>Actors: {this.state.actorList.map((actor, i) => <p key={i}>{actor.name}</p>)}</span>
            <br />
            <span>Genre: {this.state.genreList.map((genre, i) => <p key={i}>{genre.value}</p>)}</span>
            <br />
            <span>IMDB rating: {this.state.imDbRating}</span>
            <br />
            <span>User's rating: {this.state.usersRating}</span>
          </Col>  
            <div className="plot">
            <section>Plot: {this.state.title}</section>
            <h5>{this.state.plot}</h5>
            </div>
            <LikeButton />
            <Row>
        <FormCreateComment movieId={this.props.location.movieId}/>
        </Row>
        </Row>
      </Container>
    );
  }
}