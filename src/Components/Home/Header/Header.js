import React from "react";
import { Carousel } from "react-bootstrap";
import cleaning1 from "../../../Images/cleaning1.jpg";
import cleaning2 from "../../../Images/cleaning2.jpg";
import cleaning3 from "../../../Images/cleaning2.jpg";
import NavBar from "../../Shared/NavBar/NavBar";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div style={{ height: "500px" }}>
        <Carousel className="banner">
          <Carousel.Item>
            <div className="row">
              <div className="col-md-5">
                <Carousel.Caption>
                  <h3 style={{ color: "black" }}>First slide label</h3>
                  <p style={{ color: "black" }}>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <img
                  style={{ height: "500px", borderRadius: "10px" }}
                  className="d-block w-100 p-3"
                  src={cleaning1}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-5">
                <Carousel.Caption>
                  <h3 style={{ color: "black" }}>First slide label</h3>
                  <p style={{ color: "black" }}>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </div>
              <div className="col-md-7">
                <img
                  style={{ height: "500px", borderRadius: "10px" }}
                  className="d-block w-100 p-3"
                  src={cleaning2}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row d-flex align-items-center">
              <div className="col-md-5">
                <Carousel.Caption>
                  <h3 style={{ color: "black" }}>First slide label</h3>
                  <p style={{ color: "black" }}>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </div>
              <div className="col-md-7">
                <img
                  style={{ height: "500px", borderRadius: "10px" }}
                  className="d-block w-100 p-3"
                  src={cleaning3}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
