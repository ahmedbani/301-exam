import React from "react";
import { Card, Button } from "react-bootstrap";

class FavFruitCard extends React.Component {
  render() {
    return (
      <div id='favFruitCards'>
        {this.props.favFruits.map((item) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>price: {item.price}</Card.Text>
                <Button variant="primary" onClick={()=>this.props.handleShow(item)}>Update</Button>
                <Button variant="primary" onClick={()=>this.props.deleteFruit(item)}className='red'>Delete</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default FavFruitCard;
