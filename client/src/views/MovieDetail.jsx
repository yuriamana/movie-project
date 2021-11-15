import React, { Component } from "react";
import APIHandler from "./../api/APIHandler";
import { Container, Row, Col } from "react-bootstrap";
import './../styles/MovieDetail.css'
import FormCreateComment from "../components/form/FormCreateComment";

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
        <h1>{this.state.title} </h1> <span>({this.state.year})</span>
        <br/>
        <Row className="bodydetail">
          <Col md="auto" className="colImag">
            <img src={this.state.image} alt="one-movie" width="200px"/>
          </Col>  

          <Col md={6} className="infoText">
            <span>Director: {this.state.director}</span>
            <br />
            <span>Duration: {this.state.duration}min</span>
            <br />
            <span className="AGlist">Actors: {this.state.actorList.map(actor => <h6>{actor.name}/</h6>)}</span>
            <br />
            {/* <span>Actors: {this.state.actorList.map((actor, i) => <p key={i}>{actor.name}</p>)}</span>
            <br />
            <span>Genre: {this.state.genreList.map((genre, i) => <p key={i}>{genre.value}</p>)}</span> */}
            <span>IMDB rating : {this.state.imDbRating}</span>
            <br />
            <span className="AGlist">Genre : {this.state.genreList.map(i => <h6> {i.value}\ </h6>)}</span>
            <br/>
            <span>User's rating : {this.state.usersRating}</span>
          </Col>  
            <Col md={9} className="plot">
            <h5>Plot: {this.state.title}</h5>
            <h6>{this.state.plot}</h6>
            </Col>
            <Row>
        <FormCreateComment movieId={this.props.match.params.id}/>
        </Row>
        </Row>
      </Container>
    );
  }
}