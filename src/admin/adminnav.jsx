import React from "react";

import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaPhoneAlt, FaTruck } from "react-icons/fa";


const Adminnav = () => {
  return (
    <header className="navbar">
      <div className="top-bar">
        <div className="logo-section">
          <img src="/1.png" alt="Logo" className="logo" />
         
        </div>

        <div className="center-section">
          
          <span className="trendy-text">TRENDY COLLECTION</span>
          <div className="search-box">
            <input type="text" placeholder="SEARCH FOR JEWELLERY" />
            <button><FaSearch /></button>
          </div>
        </div>

        <div className="right-section">
          <div className="auth">
            <a href="/" style={{color:"black",textDecoration:"none"}}><FaUser /> <span>SIGN IN / SIGN UP</span></a>
          </div>
          <FaHeart className="icon" />
          <div className="cart">
            <FaShoppingCart className="icon" />
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <ul className="nav-links">
        <a href="/admin" style={{color:"black",textDecoration:"none"}}><li>GOLD JEWELLERY </li></a>  
         <a href="/diomondadmin" style={{color:"black",textDecoration:"none"}}><li>DIAMOND JEWELLERY </li></a> 
         <a href="/platinumadmin" style={{color:"black",textDecoration:"none"}}><li>PLATINUM JEWELLERY </li></a> 
         <a href="" style={{color:"black",textDecoration:"none"}}> <li>  <FaPhoneAlt className="icon" />
         <span><strong>1800 212 4558</strong> (Toll Free)</span></li></a>
         
        </ul>
        
      </div>


    </header>
  );
};

export default Adminnav;
