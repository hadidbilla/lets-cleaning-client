import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ServicesCart from "../ServicesCart/ServicesCart";

const OurServices = () => {
  const [orderService, setOrderService] = useState();
  useEffect(() => {
    fetch("https://hidden-basin-82739.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [orderService]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">
        Our Cool <span style={{ color: "tomato" }}>Services</span>
      </h1>
      <div className="row">
        {orderService?.map((service) => (
          <ServicesCart key={service._id} service={service}></ServicesCart>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
