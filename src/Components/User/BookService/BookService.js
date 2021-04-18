import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import SideBar from "../../Shared/SideBar/SideBar";
import ProcessPayment from "../ProcessPayment/ProcessPayment";

const BookService = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8">
        <NavBar></NavBar>
        <div style={{ width: "500px" }} className="mt-5">
          <ProcessPayment></ProcessPayment>
        </div>
      </div>
    </div>
  );
};

export default BookService;
