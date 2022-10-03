import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import Logo from "../assets/chickenall.png";

import "../styles/Navbar.css";

function Navbar() {
  const [openLink, setOpenLink] = useState(false);

  const toggleNavbar = () => {
    setOpenLink(!openLink);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLink ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={() => toggleNavbar()}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
