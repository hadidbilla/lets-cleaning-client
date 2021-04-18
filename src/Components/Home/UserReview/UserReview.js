import React from "react";
import { Button, Card } from "react-bootstrap";

function UserReview() {
  return (
    <Card
      className="col-md-3 offset-1 mt-5 mb-5 shadow-lg"
      style={{ width: "18rem", border: "0px" }}
    >
      <div className="text-center mt-3">
        <Card.Img
          variant="top"
          style={{ height: "70px", width: "80px" }}
          src=""
        />
      </div>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Title></Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserReview;
