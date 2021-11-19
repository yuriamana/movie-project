import React, { Component } from "react";
import APIHandler from "../../api/APIHandler";
import { Form, Button, Row }from "react-bootstrap"
// comment recuperer le user connecte dans ce composqnt 
// pour envoyer le id_author dans le post /comments ?

export default class FormCreateComment extends Component {
  state = {
    inputText: "",
  };

  handleInputText = (val) => {
    this.setState({
      inputText: val.target.value,
    });
  };

  handleAddComment = (e) => {
    // console.log("here");
    let myComment = {
      comment: this.state.inputText,
      rate: "3",
      id_film: this.props.movieId,
      id_author: "618ffb3532facccdf54b37dc"
    };
    // console.log("be4 post");
    APIHandler.post("/comments", myComment)
      .then((res) => {
        // console.log("after post result");
        // passer l'info au parent (un comme nt a été ajouté )
        // le parent fetch tousles comments (les anciens + le nouveau) puis setState(comments)
        // du coup re-render et on peut afficher la liste des comments
        console.log(res);
        console.log(this.props);
        this.props.fetchAllComments(this.props.movieId);
      })
      .catch((apiErr) => console.error(apiErr));
    // console.log("after post");
  };

  render() {
    // function simulateNetworkRequest() {
    //   return new Promise((resolve) => setTimeout(resolve, 2000));
    // }
    
    // function LoadingButton() {
    //   const [isLoading, setLoading] = useState(false);
    
    //   useEffect(() => {
    //     if (isLoading) {
    //       simulateNetworkRequest().then(() => {
    //         setLoading(false);
    //       });
    //     }
    //   }, [isLoading]);
    
    //   const handleClick = () => setLoading(true);
    return (
      <div>
       <img src="/imag/rewies.png" alt="rewies" className="sendimg" onClick={() => this.handleAddComment()} title="超链接1"/>
      <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" placeholder="Comment Here..." rows={2} onChange={(value) => this.handleInputText(value)}/>
          {' '}</Form.Group>
      </Form>

      </div>
    );
    
  }
}  
