import React, { Component } from "react";
import APIHandler from "./../api/APIHandler";
import { Container, Row, Col } from "react-bootstrap";
import "./../styles/MovieDetail.css";
import FormCreateComment from "../components/form/FormCreateComment";
import { Link } from "react-router-dom";
import LikeButton from "../components/LikeButton";
import { withRouter } from "react-router-dom";
import StarRating from "./../StarRating";
import "./../styles/stars.css"

class MovieDetail extends Component {
 state =
  {
    title: "",
    year: "",
    image: "",
    director: "",
    duration: "",
    plot: "",
    actorList: [
      {
        image: "",
        name: "",
      },
    ],
    genreList: [
      {
        value: "",
      },
    ],
    imDbRating: "",
    usersRating: "",
    comments: [],
  };

  async componentDidMount() {
    // console.log(this)
    //   console.log(this.props.location.movieId)
    //this.props are properties you give to an object when you create so you can access/use them
    //for ex Link with a props "to=" create a new object (movie detail) and provide its properties
    APIHandler.get(`/movie/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.setState(
          {
            title: data.title,
            year: data.year.split(0, 1),
            director: data.directors,
            duration: data.runtimeMins,
            plot: data.plot,
            image: data.image,
            actorList: data.actorList,
            genreList: data.genreList,
            imDbRating: data.imDbRating,
            // usersRating: data.usersRating,
          },
          () => {
            this.fetchAllComments(this.props.match.params.id);
          }
        );
      })
      .catch((apiErr) => console.error(apiErr));
  }
  // aussi fetch tous les comments de ce films et setState comments

  fetchAllComments = async (id) => {
    // req ajax ici
    try {
      const res = await APIHandler.get("/comments/" + id);
      this.setState({
        comments: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleDelete = async (id) => {
    try {
      await APIHandler.delete(`/comments/${id}`);
      this.fetchAllComments();
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    // console.log(this.props)
    // console.log(this.state.actorList);

    return (
      <Container>
        <br />
        <h1>{this.state.title} </h1> <span>({this.state.year})</span>
        <br />
        <Row className="bodydetail">
          <Col md="auto" className="colImag">
            <img src={this.state.image} alt="one-movie" width="200px" />
          </Col>

          <Col md={5} className="infoText">
            <span>Director: {this.state.director}</span>
            <br />
            <span>Duration: {this.state.duration}min</span>
            <br />
            <span className="AGlist">
              Actors:{" "}
              {this.state.actorList.map((actor, i) => (
                <h6 key={i}>{actor.name}/</h6>
              ))}
            </span>
            <br />
            <span>IMDB rating : {this.state.imDbRating}</span>
            <br />
            <span className="AGlist">
              Genre :{" "}
              {this.state.genreList.map((genre, i) => (
                <h6 key={i}> {genre.value}\ </h6>
              ))}
            </span>
            <br />
            <span>User's rating : </span>
            <StarRating/>
          </Col>
          <Col>
            <span>
              {this.state.actorList.map((actor, i) => (
                <Link to="/actor/:id" className="actorblok" key={i}>
                  <img
                    className="actorimgs"
                    src={actor.image}
                    alt={actor.name}
                  />
                  {actor.name}
                </Link>
              ))}
            </span>
          </Col>
          <Col md={8} className="plot">
            <h5>Plot: {this.state.title}</h5>
            <h6>{this.state.plot}</h6>
            <LikeButton />
          </Col>
          <Row>
            <FormCreateComment
              fetchAllComments={this.fetchAllComments}
              movieId={this.props.match.params.id}
            />
          </Row>
        </Row>
        {this.state.comments.map((comment, i) => {
          return (
            <div key={i} className="">
              {comment.comment}
              {comment.rate}
              <button onClick={() => this.handleDelete(comment._id)}>
              <i className="fas fa-trash">Delete</i>
              </button>
              <button>
              <i class="fas fa-edit">Edit</i>
              </button>  
            </div>
          );
        })}
      </Container>
    );
  }
}
export default withRouter(MovieDetail);
