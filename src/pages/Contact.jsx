import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="info-container">
        <div className="description-container">
          <h2 className="contact-heading">Get in touch : </h2>
          <p className="contact-para">Fill the form to stay Connected</p>
          <div className="icon-data-container">
            <img className="icon-data-img" src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="" /><span>Acme Inc , Street , State , Postal Code</span>
          </div>
          <div className="icon-data-container">
            <img className="icon-data-img" src="https://static-00.iconduck.com/assets.00/call-icon-2048x2048-9fglrllu.png" alt="" /><span>+44 1234567890</span>
          </div>
          <div className="icon-data-container">
            <img className="icon-data-img" src="https://cdn-icons-png.flaticon.com/512/739/739286.png" alt="" /><span>info@acmo.org</span>
          </div>
        </div>
        <div className="input-form-data-container">
            <form className="form-container">
              <input type="text" placeholder="Enter Full Name.."/>
              <input type="text" placeholder="Enter Email Here.."/>
              <input type="text" placeholder="Enter Phone Number.."/>
              <input type="button" className="form-submit-btn" value="submit"/>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;