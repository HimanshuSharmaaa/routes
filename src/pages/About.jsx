import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-img-container">
          <img className="about-img" src="https://images.unsplash.com/photo-1542729779-11d8fe8e25f6?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcmJ1Y2tzJTIwY29mZmVlfGVufDB8fDB8fHww" alt=""/>
        </div>
        <div className="about-data-container">
          <h1 className="about-heading">Welcome to starbucks</h1>
          <p className="about-para-data">Step into a world where passion for coffee meets a commitment to
            community. Since our humble beginnings in Seattle's Pike Place
            Market, Starbucks has become synonymous with exceptional coffee and
            genuine hospitality. Each day, our expert baristas craft your
            favorite beverages with care, using ethically sourced coffee beans
            and quality ingredients. Whether you're here to jumpstart your
            morning or unwind in the afternoon, our cozy atmosphere and friendly
            service create the perfect setting for every occasion. Join us at
            starbucks and discover why Starbucks is more than a coffeehouse -
            it's a place where moments are made.</p>
        </div>
      </div>
    </div>
  );
};

export default About;