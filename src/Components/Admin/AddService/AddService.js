import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import SideBar from "../../Shared/SideBar/SideBar";
import AddServiceForm from "./AddServiceForm/AddServiceForm";

function AddService() {
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8">
        <NavBar></NavBar>
        <div className="mt-5">
          <AddServiceForm></AddServiceForm>
        </div>
      </div>
    </div>
  );
}

export default AddService;
