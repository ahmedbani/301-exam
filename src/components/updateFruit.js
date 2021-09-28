import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

class UpdateFruit extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Fruit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit = {this.props.updateFruit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Fruit Name</Form.Label>
                <Form.Control type="text" placeholder="Enter fruit name" defaultValue={this.props.fruitInfo.name}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="photo">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="text" placeholder="url" defaultValue= {this.props.fruitInfo.image}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="enter price" defaultValue={this.props.fruitInfo.price}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdateFruit;
