import React, { useContext } from "react";
import { Context } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../nav/nav";

const Wallet = () => {
  const { cart, setCart } = useContext(Context);
  const navigate = useNavigate();

  // Increase quantity
  const increaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((stock, i) =>
        i === index ? { ...stock, quantity: (stock.quantity || 1) + 1 } : stock
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((stock, i) =>
        i === index && stock.quantity > 1
          ? { ...stock, quantity: stock.quantity - 1 }
          : stock
      )
    );
  };

  // Remove from cart
  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  // Total price
  const totalPrice = cart.reduce((sum, stock) => sum + stock.price * (stock.quantity || 1), 0);

  // Payment redirect
  const handlePayNow = () => {
    navigate(`/payment?total=${totalPrice}`);
  };
  const handleexit=()=>{
    navigate("/gold");
  }
  return (
    <div className="wallet-container">
        <button className="btn btn-danger" onClick={handleexit} style={{marginLeft:"-200vh",marginTop:"-50px"}}>Back</button>
      <div className="container-fluid">
        
      </div>

      <div style={{ marginTop: "50px" }}>
        <h1>Your Wallet</h1>
        {cart.length === 0 ? (
          <p className="empty-wallet">No stocks purchased yet.</p>
        ) : (
          <>
            <div className="wallet-list">
              {cart.map((stock, index) => (
                <div key={index} className="wallet-card">
                  <img src={`${process.env.REACT_APP_API_URL}${stock.image}`} alt={stock.name} />
                  <h3>{stock.name}</h3>
                  <p><strong>Description:</strong> {stock.description}</p>
                  <p><strong>Category:</strong> {stock.category}</p>
                  <p><strong>Manufactured On:</strong> {stock.manufacturingDate ? new Date(stock.manufacturingDate).toLocaleDateString() : "N/A"}</p>
                  <p><strong>Price:</strong> ₹{stock.price.toFixed(2)}</p>

                  {/* Quantity Controls */}
                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(index)}>-</button>
                    <span>{stock.quantity || 1}</span>
                    <button onClick={() => increaseQuantity(index)}>+</button>
                  </div>

                  <button className="delete-btn" onClick={() => handleRemoveFromCart(index)}>Remove</button>
                </div>
              ))}
            </div>

            {/* Total and Pay Now */}
            <div className="total-section">
              <h2>Total: ₹{totalPrice.toFixed(2)}</h2>
              <button className="pay-btn" onClick={handlePayNow}>Pay Now</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wallet;
