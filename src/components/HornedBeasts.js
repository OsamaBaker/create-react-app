import React from "react";
import "../App.css";
// import Beasts from "./Beasts.json";
import Card from "react-bootstrap/Card";
// import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';



class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLikes: 0,
      showModal: false,
    };
  }

  increaseNoOfLikes = () => {
    this.setState({
      numberOfLikes: this.state.numberOfLikes + 1,
    });
  };

  clickMe = () =>{
    this.props.modal({
        title: this.props.title,
        image_url: this.props.image_url,
        description: this.props.description
    })
  }
 
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            onClick={this.increaseNoOfLikes}
            src={this.props.image_url}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>❤️ {this.state.numberOfLikes}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
            <Button onClick={this.clickMe} variant="primary">Click Me!</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeasts;


