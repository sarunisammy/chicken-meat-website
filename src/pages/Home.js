import React from "react";
import { Link } from "react-router-dom";
import Pape from "../assets/Paperoni.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${Pape})`,
      }}
    >
      <div className="headerContainer">
        <h1 style={{ color: "black", paddingLeft: "4px", fontSize: "24px" }}>
          Home Of Chicken
        </h1>
        <p style={{ color: "black", fontSize: "24px" }}>
          The Saruni Restaurant
        </p>
      </div>

      <Link to="/menu">
        <button
          style={{
            cursor: "pointer",
            padding: "12px 14px",
            paddingLeft: "4px",
            paddingRight: "4px",
            marginLeft: "4px",
            color: "black",
          }}
        >
          ORDER
        </button>
      </Link>
    </div>
  );
}

export default Home;
