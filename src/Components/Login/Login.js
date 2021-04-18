import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";
import cleaning from "../../Images/cleaning.png";
import google from "../../Images/google.png";
import "./Login";
import { firebaseConfig } from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import NavBar from "../Shared/NavBar/NavBar";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const googleSignIn = () => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        fetch(`https://hidden-basin-82739.herokuapp.com/isAdmin?email=${email}`)
          .then((res) => res.json())
          .then((data) => {
            const signedInUser = {
              name: displayName,
              email,
              photo: photoURL,
              isAdmin: data,
            };
            setLoggedInUser(signedInUser);
            history.replace(from);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`ErrorCode:${errorCode}, ErrorMessage:${errorMessage}`);
      });
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="cleaning mt-5 d-flex justify-content-center">
        <img
          className="mr-3"
          style={{ height: "60px", width: "60px" }}
          src={cleaning}
          alt=""
        />
        <h4>
          Let's <br /> Cleaning
        </h4>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div style={{}}>
          <button
            onClick={googleSignIn}
            className="d-flex justify-content-between align-items-center login"
            style={{ border: "0px", width: "400px" }}
          >
            <img
              style={{ height: "20px", width: "20px" }}
              src={google}
              alt=""
            />
            <p className="text-center pt-2">continue with google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
