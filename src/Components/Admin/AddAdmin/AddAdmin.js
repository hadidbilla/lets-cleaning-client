import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import SideBar from "../../Shared/SideBar/SideBar";
import AdminForm from "./AdminForm/AdminForm";

function AddAdmin() {
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8">
        <NavBar></NavBar>
        <div className="mt-5">
          <AdminForm />
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
