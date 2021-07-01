import React from "react";
import HornedBeasts from "./HornedBeasts";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

class Main extends React.Component {

  handleChange = (event) => {
    event.preventDefault();
    let value = event.target.value;

    this.props.filter(value);
  };

  
  render() {
    return (
      <>
        <Form onSelect={this.handleChange}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select number of horns:</Form.Label>
            <Form.Control
              as="select"
              name="select"
              onChange={this.handleChange}
            >
              <option value="all" name="all">
                All
              </option>
              <option value="1" name="one">
                1
              </option>
              <option value="2" name="two">
                2
              </option>
              <option value="3" name="three">
                3
              </option>
              <option value="100" name="oneHundred">
                Wow..
              </option>
            </Form.Control>
          </Form.Group>
        </Form>
        {this.props.beasts.map((item, index) => {
          return (
            <HornedBeasts
              title={item.title}
              image_url={item.image_url}
              description={item.description}
              key={index}
              modal={this.props.showBeast}
            />
          );
        })}
      </>
    );
  }
}

export default Main;
