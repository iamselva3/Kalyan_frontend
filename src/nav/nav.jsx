import React, { useEffect, useState } from "react";
import "./nav.css";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchSuggestions = async () => {
        if (query.length > 1) {
          try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/search/products?q=${query}`);
            setSuggestions(res.data);
          } catch (err) {
            console.error("Error fetching suggestions:", err);
          }
        } else {
          setSuggestions([]);
        }
      };
  
      const delayDebounce = setTimeout(() => {
        fetchSuggestions();
      }, 300); // debounce time
  
      return () => clearTimeout(delayDebounce);
    }, [query]);
  
    const handleSuggestionClick = (id) => {
      navigate("/gold"); // optional: go to product page
      setQuery(""); // clear search bar
      setSuggestions([]);
    };

  return (
    <header className="navbar">
       <div className="top-bar">
        <div className="logo-section">
          <img src="/1.png" alt="Logo" className="logo" />
        </div>

        <div className="center-section">
          <span className="trendy-text">TRENDY COLLECTION</span>
          <div className="search-box">
            <input
              type="text"
              placeholder="SEARCH FOR JEWELLERY"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            <button><FaSearch /></button>

             {suggestions.length > 0 && (
        <ul className="suggestions-dropdown">
          {suggestions.map((item, index) => (
            <li key={index} className="suggestion-item" onClick={() => handleSuggestionClick(item._id)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
          </div>
        </div>

        <div className="right-section">
          <div className="auth">
            <a href="/" style={{color:"black",textDecoration:"none"}}><FaUser /> <span>SIGN IN / SIGN UP</span></a>
          </div>
          <FaHeart className="icon" />
          <div className="cart">
           <a href="/cart"> <FaShoppingCart className="icon" />
            <span className="cart-count">0</span></a>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <ul className="nav-links">
        <a href="/home" id="nava"style={{color:"black",textDecoration:"none"}}><li>HOME </li></a> 
        <a href="/gold" id="nava"style={{color:"black",textDecoration:"none"}}><li>GOLD JEWELLERY </li></a>  
         <a href="/diamond"id="nava" style={{color:"black",textDecoration:"none"}}><li>DIAMOND JEWELLERY </li></a> 
         <a href="/platinum"id="nava"  style={{color:"black",textDecoration:"none"}}><li>PLATINUM JEWELLERY </li></a> 
         <a href="gmail.com" id="nava" style={{color:"black",textDecoration:"none"}}> <li>  <FaPhoneAlt className="icon" style={{color:"brown"}}/>
         <span style={{color:"brown"}}><strong>1800 212 4558</strong> (Toll Free)</span></li></a>
         
        </ul>
        
      </div>
    </header>
  );
};

export default Navbar;
