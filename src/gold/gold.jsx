import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../nav/nav'
import "./gold.css"
import axios from 'axios';
import { Context } from '../App';
import { useNavigate } from 'react-router-dom';
import qrCode from "./phone.jpg"; // Adjust path as needed
import appPreview from "./qrcode.jpg";

const Gold = () => {
    const [products, setProducts] = useState([]);
    const { setCart } = useContext(Context);
    const navigate=useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
            setProducts(response.data);
          } catch (error) {
            console.log("Error while fetching data", error);
          }
        };
        fetchData();
      }, []);

      const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]); // Add product to the cart array
        navigate("/cart"); 
       };
  return (
    <div>
      <Navbar />
      <img src='./2.png' alt='img2' className='banner'></img>
      <section style={{marginTop:"30px"}}>
        <h2>Get Ready to Sparkle in Our Astonishing Gold Necklace</h2>
        <p>
          The big deal about buying gold jewellery online is that it’s far more convenient. You can buy gold online without stepping out of your home. Moreover, you can exchange or return your gold jewellery at any time. Last but not least are the competitive prices that you can find for your jewellery. So, celebrate with elegance in every moment with the dazzle of jewellery from Kalyan. They’re crafted to make every moment unforgettable.
        </p>
      </section>

      <h2 style={{textAlign:"center",   }}>Gold Section</h2>

      <section className="product-list-section">
  <div className="container">
    
    <div className="product-container">
      {products.map((product) => (
        <div key={product._id} className="product">
          <img
            src={`${process.env.REACT_APP_API_URL}${product.image}`}
            alt={product.name}
            className="image"
          />
          <h3>{product.name}</h3>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p><strong>Manufactured:</strong> {product.manufacturingDate?.split("T")[0]}</p>

          <button onClick={() => handleAddToCart(product)} id="btnstyle3">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

<footer className="footer-container">
          <div className="footer-grid">
    
            <div className="footer-section">
              <h5>SHOPPING</h5>
              <ul>
                <li>Gold Jewellery</li>
                <li>Diamond Jewellery</li>
                <li>Platinum Jewellery</li>
                <li>Gold Coin</li>
                <li>Trendy Collection</li>
                <li>Digi Gold <span className="new-badge">NEW</span></li>
                <li>Blog</li>
                <li>CSR</li>
              </ul>
            </div>
    
            <div className="footer-section">
              <h5>CUSTOMER SERVICES</h5>
              <ul>
                <li>Terms of Use</li>
                <li>Scheme Payment</li>
                <li>Shipping Policy</li>
                <li>Cancellation Policy</li>
                <li>Privacy Policy</li>
                <li>Return / Exchange</li>
                <li>Gift Card Policy</li>
                <li>Customize Product</li>
              </ul>
            </div>
    
            <div className="footer-section">
              <h5>LET US HELP YOU</h5>
              <ul>
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Payment FAQ</li>
                <li>Ring Size Guide</li>
                <li>Bangle Size Guide</li>
                <li>Education</li>
                <li>Offer Zone</li>
                <li>Sitemap</li>
                <li>HUID FAQ</li>
              </ul>
            </div>
    
            <div className="footer-section">
              <h5>OUR COMPANY</h5>
              <ul>
                <li>About Us</li>
                <li>History</li>
                <li>Career</li>
                <li>Store Locator</li>
                <li>Feedback</li>
                <li>Media</li>
              </ul>
            </div>
    
            <div className="footer-section large">
              <h5>SHOP FROM OUR APP</h5>
              <p>
                Find the best Gold & Diamond Jewellery with just a click. Our app brings you the latest
                jewellery designs and the safest shopping experience. Get it all in just a click.
              </p>
              <div className="app-section">
                <img src={qrCode} alt="QR Code" className="qr" />
                <div className="app-buttons">
                  <a href="google.com"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" /></a>
                  {/* <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" /></a> */}
                </div>
                <img src={appPreview} alt="App Preview" className="phone-preview" />
              </div>
            </div>
    
          </div>
        </footer>

    </div>
  )
}

export default Gold;
