import React from "react";
import { Button, Card } from "react-bootstrap";

const ShowBookingCart = ({ service }) => {
  const { title, img, status, description } = service;
  return (
    <div className="col-md-3 offset-1">
      <Card style={{ width: "18rem" }}>
        <div className="d-flex justify-content-between p-2">
          <Card.Img
            style={{ width: "30px", height: "30px" }}
            variant="top"
            src={img}
          />
          <h6>{status}</h6>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShowBookingCart;
