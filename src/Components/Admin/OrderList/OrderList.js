import React, { useEffect, useState } from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import SideBar from "../../Shared/SideBar/SideBar";
import OrderTable from "./OrderTable/OrderTable";

function OrderList() {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("https://hidden-basin-82739.herokuapp.com/allBooking")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  const handleChange = (id, e) => {
    console.log(id, e.target.value);
    const status = e.target.value;

    fetch(`https://hidden-basin-82739.herokuapp.com/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8">
        <NavBar></NavBar>
        <div className="mt-5">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Service</th>
                <th scope="col">Payment With</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((book) => (
                <OrderTable
                  handleChange={handleChange}
                  book={book}
                ></OrderTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
