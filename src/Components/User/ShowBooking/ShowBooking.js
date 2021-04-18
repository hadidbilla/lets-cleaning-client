import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import NavBar from "../../Shared/NavBar/NavBar";
import SideBar from "../../Shared/SideBar/SideBar";
import ShowBookingCart from "./ShowBookingCart/ShowBookingCart";

const ShowBooking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookServices, setBookServices] = useState([]);
  useEffect(() => {
    fetch(
      `https://hidden-basin-82739.herokuapp.com/showBookingByMail?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => setBookServices(data));
  }, [loggedInUser.email]);
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8">
        <NavBar></NavBar>
        <div className="mt-5 row">
          {bookServices.map((service) => (
            <ShowBookingCart service={service}></ShowBookingCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowBooking;
