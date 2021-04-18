import React from "react";
import { Card } from "react-bootstrap";

function ReviewCart({ review }) {
  return (
    <Card
      className="col-md-3 col-xs-12 col-sm-6 offset-1 mt-5 mb-5 box"
      style={{ width: "18rem", border: "0px" }}
    >
      <div className="text-center mt-3">
        <Card.Img
          variant="top"
          style={{ height: "70px", width: "80px", borderRadius: "50%" }}
          src={review.photo}
        />
      </div>
      <Card.Body>
        <Card.Title className="text-center">{review.name}</Card.Title>
        <Card.Text className="text-center">{review.message}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ReviewCart;
