import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./SideBar.css";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div style={{ height: "750px" }} class="d-flex">
      <nav id="sidebar" class="img">
        <div class="p-4">
          <ul class="list-unstyled components mb-5">
            {!loggedInUser.isAdmin && (
              <div>
                <li class="active">
                  <Link t0="/bookService">
                    <span class="fa fa-home mr-3"></span> Book
                  </Link>
                </li>
                <li>
                  <Link to="/showBooking">
                    <span class="fa fa-user mr-3"></span> Booking List
                  </Link>
                </li>
              </div>
            )}
            <li>
              <Link to="/userReview">
                <span class="fa fa-plane mr-3"></span> Review
              </Link>
            </li>

            {loggedInUser.isAdmin && (
              <div>
                <li>
                  <Link to="/addAdmin">
                    <span class="fa fa-sticky-note mr-3"></span> Add Admin
                  </Link>
                </li>
                <li>
                  <Link to="/addService">
                    <span class="fa fa-sticky-note mr-3"></span> Add Service
                  </Link>
                </li>
                <li>
                  <Link to="/manage">
                    <span class="fa fa-cogs mr-3"></span> Manage Booking
                  </Link>
                </li>
                <li>
                  <Link to="/serviceList">
                    <span class="fa fa-paper-plane mr-3">Service List</span>
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
