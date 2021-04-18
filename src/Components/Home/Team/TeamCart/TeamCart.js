import React from "react";
import { Card } from "react-bootstrap";

const TeamCart = ({ member }) => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-12 offset-1 mb-5">
      <Card className="box" style={{ width: "18rem", border: "0px" }}>
        <div className="">
          <div className="d-flex justify-content-center mt-2">
            <Card.Img
              variant="top"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              src={member.img}
            />
          </div>
          <div className="d-flex mt-2 justify-content-around">
            <Card.Title className="mr-2">{member.name}</Card.Title>
            <Card.Title>{member.title}</Card.Title>
          </div>
        </div>
        <Card.Body>
          <Card.Text>{member.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeamCart;
