import React from "react";
import Contact from "../components/home/Contact";

import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "./home.css";

function Home() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="hero">
        <div className="container">
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
              style={{ marginTop: "6rem", marginBottom: "3rem" }}
            >
              <h1>
                Policies
                <mark className="yellow">made easy</mark>
                for you
              </h1>

              <h2>
                Analyse and understand policies better than ever.
              </h2>
              <button className="btn btn-dark " onClick={() =>
                window.open(
                  "https://www.expert.ai/",
                  "_target"
                )}>Powered by expert.ai</button>

            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
              style={{ marginTop: "6rem", marginBottom: "3rem" }}
            >


              <img
                src="https://i.ibb.co/sq2mf25/Untitled-design.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container info">
        <h3>
          Paste policies and get easy to understand summary, and analyse the document
        </h3>
      </div>
      <br></br>


      <Features></Features>
      <HowItWorks></HowItWorks>

      <Contact></Contact>

      <Footer></Footer>
    </React.Fragment>
  );
}

export default Home;
