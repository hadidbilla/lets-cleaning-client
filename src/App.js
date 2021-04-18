import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import BookService from "./Components/User/BookService/BookService";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import ShowBooking from "./Components/User/ShowBooking/ShowBooking";
import UserReview from "./Components/User/UserReview/UserReview";
import AddAdmin from "./Components/Admin/AddAdmin/AddAdmin";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddService from "./Components/Admin/AddService/AddService";
import ManageBooking from "./Components/Admin/ManageBooking/ManageBooking";
import OrderList from "./Components/Admin/OrderList/OrderList";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/manage">
            <ManageBooking />
          </Route>
          <Route path="/serviceList">
            <OrderList />
          </Route>
          <Route path="/userReview">
            <UserReview />
          </Route>
          <Route path="/addAdmin">
            <AddAdmin />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/showBooking">
            <ShowBooking />
          </Route>
          <Route path="/addAdmin">
            <AddAdmin />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/bookService/:id">
            <BookService />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route exact path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
