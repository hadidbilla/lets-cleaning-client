import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import SideBar from "../../Shared/SideBar/SideBar";
import ReviewForm from "./ReviewForm/ReviewForm";

const UserReview = ({ review }) => {
  console.log(review);
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8">
        <NavBar></NavBar>
        <div style={{ width: "500px" }} className="mt-5">
          <ReviewForm></ReviewForm>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
