import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../../App";
import NavBar from "../Shared/NavBar/NavBar";
import SideBar from "../Shared/SideBar/SideBar";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8">
        <NavBar></NavBar>
        <div className="mt-5 d-flex justify-content-center">
          <div className="">
            <Card
              className=" mt-5 shadow-lg"
              style={{ width: "18rem", border: "0px" }}
            >
              <div className="text-center mt-3">
                <Card.Img
                  variant="top"
                  style={{ height: "70px", width: "80px", borderRadius: "50%" }}
                  src={loggedInUser.photo}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center">
                  {loggedInUser.name}
                </Card.Title>
                <Card.Text className="text-center">
                  {loggedInUser.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
