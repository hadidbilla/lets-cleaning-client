import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./ServiceCart.css";

const ServicesCart = ({ service }) => {
  const { img, title, price, _id } = service;
  const history = useHistory();
  const handleAddBook = (id) => {
    history.push(`/bookService/${id}`);
  };

  return (
    <Card
      className="col-md-3 col-sm-6 col-xs-12 offset-1 mt-5 mb-5 box"
      style={{ width: "18rem", border: "0px" }}
    >
      <div className="text-center mt-3">
        <div className="img-hover-zoom card-img-top">
          <img
            style={{ height: "70px", width: "80px" }}
            src={img}
            className=""
            alt=""
            srcset=""
          />
        </div>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>Price: ৳{price}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          laborum?
        </Card.Text>
        <div className="d-flex justify-content-center mt-3">
          <Button onClick={() => handleAddBook(_id)} variant="primary">
            Place Order
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServicesCart;
