import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='leftSide'>
          <img src={logo} />
        </div>

        <div className='rightSide'>
          <Link to='/'>Home</Link>
          <Link to='/'>Menu</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
