import React, { useEffect, useState } from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import SideBar from "../../Shared/SideBar/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

function ManageBooking() {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("https://hidden-basin-82739.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  const handleDeleteItem = (id) => {
    console.log(id);
    fetch(`https://hidden-basin-82739.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data, " Delete Successfully"));
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8">
        <NavBar></NavBar>
        <div className="mt-5">
          <div className="card mb-4 mt-5">
            <div class="card-body d-flex justify-content-around ">
              <h5 class="card-title">Name</h5>
              <h4 class="card-title">price</h4>
              <h4 class="card-title">Action</h4>
            </div>
          </div>
          {allServices.map((service) => (
            <div className="card mb-4">
              <div class="card-body d-flex justify-content-around ">
                <h6 class="card-title">{service.title}</h6>
                <h4>৳{service.price}</h4>
                <button
                  onClick={() => handleDeleteItem(service._id)}
                  style={{ border: "0px", backgroundColor: "white" }}
                >
                  <FontAwesomeIcon
                    style={{ color: "red" }}
                    icon={faBackspace}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageBooking;
