import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

import { showToast } from "../util/showToast";

export default function Account(props) {
  const logoutAccount = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      showToast("SUCCESS", "Logged out successfully");
      props.history.push("/");
    } catch (err) {
      if (err.response.status === 401) {
        localStorage.removeItem("user");
        showToast("SUCCESS", "Logged out successfully");
        props.history.push("/");
        return;
      }
      showToast("ERROR", "Something went wrong !, Please try again");
    }
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <div>
      <Navbar isLoggedIn={props.isLoggedIn} />
      <div className="container login">
        <br></br>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 verification-card">
            <h4 className="login-title email-verification-title">🔒 Account</h4>

            <p className="login-desc">{user.name}</p>
            <p className="login-desc">{user.email}</p>

            <form className="form-group d-flex flex-column ">
              <br />
              <button
                className="w-75 btn btn-success btn-block align-self-center btn-login-submit"
                onClick={logoutAccount}
              >
                Logout
              </button>
            </form>

            <br></br>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 login-img-container">
            <img
              src="https://res.cloudinary.com/dhw5dya3h/image/upload/v1640626500/illustration_register_emr222.png"
              className="img-fluid"
              alt="Login Illustration"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
