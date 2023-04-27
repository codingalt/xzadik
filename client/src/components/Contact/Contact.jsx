import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-us">
      <form>
        <div className="row">
          <div className="col-md-6 mb-2">
            <div className="mb-2">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="mb-2">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-2">
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="mb-2">
              <label className="form-label">Your Message</label>
              <textarea
                className="form-control"
                aria-describedby="emailHelp"
                rows={6}
              />
            </div>
          </div>
        </div>

        <div className="form-btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
