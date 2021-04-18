import React from "react";
import { Table } from "react-bootstrap";
import service from "../../../Images/service.jpg";
import "./ServiceDemo.css";

const ServiceDemo = () => {
  return (
    <div style={{ borderRadius: "10px" }} className="container serviceUi mb-5">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12">
          <img
            className="mt-3 mb-3 img-fluid"
            style={{ height: "300px", width: "500px", borderRadius: "10px" }}
            src={service}
            alt=""
          />
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12 mt-5">
          <h2 className="card-title">
            Now it's time to clean
            <br /> your
            <span style={{ color: "tomato" }}> goods</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit
            explicabo quo. Recusandae, eius saepe. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam voluptatibus quisquam facilis
            debitis illum dolore?
          </p>
          <div className="d-flex">
            <h2 style={{ color: "tomato" }} className="mr-5">
              499+
            </h2>
            <h2 style={{ color: "tomato" }}>10+</h2>
          </div>
          <div className="">
            <small className="mr-4">Happy Customer</small>
            <small>Total Services</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDemo;
