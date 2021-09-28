import React from "react";
import { Card, Button } from "react-bootstrap";

class FruitCard extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.fruit.image} />
          <Card.Body>
            <Card.Title>{this.props.fruit.name}</Card.Title>
            <Card.Text>
             price: {this.props.fruit.price}
            </Card.Text>
            <Button variant="primary" onClick = {()=>this.props.addFruit(this.props.fruit)}>Add to Fav</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FruitCard;
