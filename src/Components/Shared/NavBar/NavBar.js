import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./NavBar.css";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Navbar className="navbar" expand="lg">
      <Link to="/home">Let's Cleaning</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="mr-5" to="/home">
            Home
          </Link>
          <Link className="mr-5" to="/dashboard">
            Dashboard
          </Link>
          <Link className="mr-5" to="/home">
            Contact Us
          </Link>
          {loggedInUser.name ? (
            <Link className="mr-5" href="/dashboard">
              {loggedInUser.name}
            </Link>
          ) : (
            <Link className="mr-5" href="/login">
              Log In
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
