import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showData} onHide={this.props.hideBeast}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img src={this.props.modalData.image_url} />

            {this.props.modalData.description}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hideBeast}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.hideBeast}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
