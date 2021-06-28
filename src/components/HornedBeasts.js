import React from "react";
import "../App.css";
// import Beasts from "./Beasts.json";
import Card from "react-bootstrap/Card";


class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLikes: 0,
    };
  }

  increaseNoOfLikes = () => {
    this.setState({
      numberOfLikes: this.state.numberOfLikes + 1,
    });
  };

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
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeasts;


