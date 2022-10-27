import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 footer-contact">
              <h3>
                Know Your Policy<span>.</span>
              </h3>
              <p>
                <br />
                HSR Layout
                <br />
                Banglore - 560068
                <br />
                <br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/#how-it-works">About</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/#features">Features</a>
                </li>

                
               
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="mr-md-auto text-center text-md-left">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Know Your Policy</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
        {/* <div className="footer-socials text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="fa fa-linkedin"></i>
            </a>
          </div> */}
      </div>
    </footer>
  );
}

export default Footer;
