import { useEffect, useState } from "react";
import { showToast } from "../../util/showToast";
import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import Navbar from "../../components/layout/Navbar";
import { signup } from "../../service";
import LoadingOverlay from "react-loading-overlay";

const constants = {
  signupTitie: "🔒 Signup",
};

export default function Signup(props) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { email, password, confirmPassword, name } = user;
      if (
        email === "" ||
        password === "" ||
        confirmPassword === "" ||
        name === ""
      ) {
        showToast("ERROR", "Please fill all the fields !");
        return;
      }

      if (password !== confirmPassword) {
        showToast("ERROR", "Passwords do not match !");
        return;
      }
      setLoading(true);
      console.log('Hello loader should have started');

      const result = await signup(
        name,
        email,
        password
      );

      console.log(result.data);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      localStorage.setItem("token", result.data.token);
      showToast(
        "SUCCESS",
        "You have been signed up successfully"
      );
      setLoading(false);
      props.history.push("/dashboard");
    } catch (err) {
      const errorMessage = err.response.data.message
        ? err.response.data.message
        : err.message
          ? err.message
          : "Something went wrong. Please try again!";
      showToast("ERROR", errorMessage);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container login">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 login-form">
            <LoadingOverlay active={loading} spinner text="Loading ...">
              <h4 className="login-title">{constants.signupTitie}</h4>

              <p className="login-desc">Get started with Know Your Policy</p>

              <form className="form-group d-flex flex-column ">
                <input
                  className="form-control w-75 align-self-center"
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  onChange={onChange}
                  value={user.name}
                />
                <br></br>

                <input
                  className="form-control w-75 align-self-center"
                  placeholder="Email Address"
                  type="text"
                  name="email"
                  onChange={onChange}
                  value={user.email}
                />
                <br></br>
                <input
                  className="form-control w-75 align-self-center"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={user.password}
                />
                <br></br>
                <input
                  className="form-control w-75 align-self-center"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  onChange={onChange}
                  value={user.confirmPassword}
                />

                <br />
                <button
                  className="w-75 btn btn-success btn-block align-self-center btn-login-submit"
                  onClick={handleSignup}
                >
                  Submit
                </button>
              </form>

              <br></br>
              
            </LoadingOverlay>
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
