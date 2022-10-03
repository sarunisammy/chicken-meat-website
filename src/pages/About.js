import React from "react";
import Sarunibreed from "../assets/Sarunibreed.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutUpperSide"
        style={{ backgroundImage: `url(${Sarunibreed})` }}
      >
        {/* <img src={Sarunibreed} /> */}
      </div>
      <h1
        style={{
          marginLeft: "24px",
          alignItems: "center",
          display: "flex",
          color: "black",
          justifyContent: "center",
          fontSize: "40px",
        }}
      >
        About Us
      </h1>
      <div className="aboutLowerSide">
        <p
          style={{
            marginLeft: "24px",
            alignItems: "center",
            display: "flex",
            fontWeight: "300",
            fontSize: "20px",
            flexDirection: "column",
            height: "50%",
            justifyContent: "center",
          }}
        >
          {" "}
          saruni restaurant is one of the best in the country<br></br> we mainly
          do chicken, all breeds are available we are availble al time through
          all breeds are available we are availble al are available we are
          availble al time through all breeds we are availble al time through
        </p>
      </div>
    </div>
  );
}

export default About;
