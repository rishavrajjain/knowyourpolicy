import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar(props) {
  const loggedIn = props.isLoggedIn;

  const publicRoutes = (
    <nav className="navbar navbar-expand-lg fixed-top text-light portfolio-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
          Know Your Policy
        </Link>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navbarNav"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars" style={{ color: "#fff" }}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation">
              <Link className="nav-link left" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link left" href="/#how-it-works">
                How it works
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link left" href="/#features">
                Features
              </a>
            </li>
           
            
            <li className="nav-item" role="presentation">
              <a className="nav-link left" href="/#contact">
                Contact
              </a>
            </li>

            <li className="nav-item" role="presentation">
              <Link className="nav-link left" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link className="nav-link left" to="/signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  const privateRoutes = (
    <nav className="navbar navbar-expand-lg fixed-top portfolio-navbar gradient">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
          Know Your Policy
        </Link>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navbarNav"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars" style={{ color: "#fff" }}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation">
              <Link className="nav-link" to="/dashboard">
                <i
                  style={{ marginRight: "5px" }}
                  className="fa fa-bar-chart icon"
                ></i>
                Dashboard
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link className="nav-link" to="/account">
                <i
                  style={{ marginRight: "5px" }}
                  className="fa fa-address-card icon"
                ></i>
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  return loggedIn ? privateRoutes : publicRoutes;
}
