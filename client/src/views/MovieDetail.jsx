import React, { Component } from "react";
import APIHandler from "./../api/APIHandler";
import { Container, Row, Col, Button} from "react-bootstrap";
import "./../styles/MovieDetail.css";
import FormCreateComment from "../components/form/FormCreateComment";
import { Link } from "react-router-dom";
// import LikeButton from "../components/LikeButton";
import { withRouter } from "react-router-dom";
import StarRating from "../components/StarRating.jsx";
import UserStarRatingDisplay from "../components/UserStarRatingDisplay";
import "./../styles/stars.css";
import { withAuth } from "./../auth/UserContext.js";

class MovieDetail extends Component {
  state = {
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
    usersRating: [],
    comments: [],
    avgRate: null
  };

  async componentDidMount() {
    // console.log("MovieDetqils componentDidMount");
    // console.log("====================================");
    // console.log(this.props.currentUser);
    // console.log("====================================");
    //   console.log(this.props.location.movieId)
    //this.props are properties you give to an object when you create so you can access/use them
    //for ex Link with a props "to=" create a new object (movie detail) and provide its properties
    APIHandler.get(`/movie/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.setState(
          {
            title: data.title,
            year: data.year,
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
    this.fetchAllRatings(this.props.match.params.id);
  }
  // aussi fetch tous les comments de ce films et setState comments
  componentDidUpdate(prevProps, prevState) {
    // let tmp
    // if (prevProps === this.state) {
    //   let avgRate = 0
    //   if (this.state.usersRating.length > 0) {
    //    tmp = (
    //       this.state.usersRating.reduce((acc, val) => acc + val.rate, 0) /
    //       this.state.usersRating.length
    //     ).toFixed(2);
    //   }
      
    // }
    // this.setState({
    //   avgRate: tmp,
    // })
  }
  fetchAllComments = async (id) => {
    // console.log("fetchAllComments");
    // console.log(id);

    // req ajax ici
    try {
      const res = await APIHandler.get("/comments/" + id);
      // console.log("fetched all comments for ID", id, res.data);
      this.setState({
        comments: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  fetchAllRatings = async (id) => {
    try {
      const res = await APIHandler.get("/rates/" + id);
      this.setState({
        usersRating: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleDelete = async (id) => {
    try {
      await APIHandler.delete(`/comments/${id}`);
      this.fetchAllComments(this.props.match.params.id);
    } catch (err) {
      console.error(err);
    }
  };

  handleEditComment = async (e, id, text) => {
    console.log(e.code);
    if (e.key === "Enter") {
      try {
        await APIHandler.patch(`/comments/${id}`, { comment: text });
        this.fetchAllComments(this.props.match.params.id);
      } catch (err) {
        console.error(err);
      }
    }
  };

  render() {
    // console.log(this.props)
    // console.log("render()");
    // console.log(this.state.usersRating);
    let avgRate = 0;
    if (this.state.usersRating.length > 0) {
      avgRate = (
        this.state.usersRating.reduce((acc, val) => acc + val.rate, 0) /
        this.state.usersRating.length
        ).toFixed(2);
      }
      const Xmas = new Date(this.state.year);
      console.log(Xmas);
      const year = Xmas.getFullYear(); // returns -100
    return (
      <Container>
        <br />
        <h1>{this.state.title}  <span className="year">({year})</span></h1>
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
            {/* <span className="AGlist">
              Actors:{" "}
              {this.state.actorList.map((actor, i) => (
                <h6 key={i}>{actor.name} /</h6>
              ))}
            </span>
            <br /> */}
            <span>IMDB rating : {this.state.imDbRating}</span>
            <br />
            <span className="AGlist">
              Genre :{" "}
              {this.state.genreList.map((genre, i) => (
                <h6 key={i}>{genre.value} /</h6>
              ))}
            </span>
            <br />
            <p>{this.state.avgRate}</p>
            <span className="rating">
              User's rating : <UserStarRatingDisplay rating={this.state.avgRate} />
            </span>
          </Col>
          <Row>
            <Col md={10}>
              <span>
                {this.state.actorList.map((actor, i) => (
                  <Link to="/actor/:id" className="actorblok" key={i}>
                    <img
                      className="actorimgs"
                      src={ actor.image }
                      alt={ actor.name }
                    />
                    {actor.name.slice(0,15)}
                  </Link>
                ))}
              </span>
            </Col>
          </Row>
        </Row>
        <Col md={8} className="plot">
          <h5>{this.state.title}</h5>
          <h6>{this.state.plot}</h6>
        </Col>
        {/* <Row>
          <StarRating film={this.props.match.params.id} />
          <FormCreateComment
            fetchAllComments={this.fetchAllComments}
            movieId={this.props.match.params.id}
          />
        </Row> */}
        {this.state.comments.map((comment, i) => {
          return (
            <>
              <div
                contentEditable= {
                this.props.currentUser?._id === comment.id_author || true
                }
                key={i}
                className="2"
                onKeyPress={(e) =>
                  this.handleEditComment(
                    e,
                    comment._id,
                    e.currentTarget.textContent
                  )
                }
              >
                {comment.comment}
              </div>
              <Button onClick={() => this.handleDelete(comment._id)} variant="danger">
                Delete
              </Button>
            </>
          );
        })}
        <Row>
          <Col md={6}>
          <StarRating film={this.props.match.params.id} />
          <FormCreateComment
            fetchAllComments={this.fetchAllComments}
            movieId={this.props.match.params.id}
          />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(withAuth(MovieDetail));
