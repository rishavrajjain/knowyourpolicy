import React from "react";

function Features() {
  return (
    <section id="features" className="features section-bg">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="fade-in">Features</h2>
          <p data-aos="fade-in">.</p>
        </div>

        <div className="row content">
          <div className="col-md-5" data-aos="fade-right">
            <img src="https://i.ibb.co/HHRQpb5/Untitled-design-1.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-7 pt-5" data-aos="fade-left">
            <h3>Know Your Policy</h3>
            <p></p>
            <ul>
              <li>
                <i className="icofont-check"></i> Easily understand complex policies
              </li>
              <li>
                <i className="icofont-check"></i> Easy to use
              </li>

            </ul>
            <button
              className="get-started-btn scrollto"
              style={{ backgroundColor: "black" }}
              onClick={() =>
                window.open(
                  "https://www.expert.ai/",
                  "_target"
                )
              }
            >
              Powered by expert.ai
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
