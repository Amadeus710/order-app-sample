import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const Click = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div>
      <div className='navbar'>
        <div className='leftSide' id={showLinks ? "open" : "close"}>
          <img src={logo} />
          <div className='hiddenLinks'>
            <Link to='/'>Home</Link>
            <Link to='/'>Menu</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
          </div>
        </div>

        <div className='rightSide'>
          <Link to='/'>Home</Link>
          <Link to='/'>Menu</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>
          <button onClick={Click}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
