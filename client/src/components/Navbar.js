import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <a href='#about'>About </a> |<a href='#projects'>Projects</a> |
        <a href='#offer'>Offer</a> |<a href='#contact'>Contact </a>
      </nav>
    </div>
  );
};

export default Navbar;
