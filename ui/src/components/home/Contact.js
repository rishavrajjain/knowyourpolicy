import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="fade-in">Contact</h2>
          <p data-aos="fade-in"></p>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <form
              action=""
              method="post"
              role="form"
              className="php-email-form"
              data-aos="fade-up"
            >
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
                <div className="validate"></div>
              </div>

              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
