import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../nav/nav'
import "./diamond.css";
import axios from 'axios';
import { Context } from '../App';
import { useNavigate } from 'react-router-dom';
import qrCode from "./phone.jpg"; // Adjust path as needed
import appPreview from "./qrcode.jpg";

const Diamond = () => {
    const [products, setProducts] = useState([]);
    const { user, setPage, setCart } = useContext(Context);
    const navigate=useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/product1`);
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
      <img src='./3.png' alt='img2' className='banner'></img>
      <section style={{marginTop:"30px"}}>
        <h2>Get Ready to Dazzle With Our Best Diamond Jewellery</h2>
        <p>
        If you’re a bride shopping around for diamond jewellery for a wedding or a husband seeking the right anniversary gift for your special someone, shop everlasting dazzle of diamonds online or from our physical store. Be it a diamond ring, diamond necklace, diamond earring, diamond nose pin, diamond bracelet, diamond pendant, or diamond bangle, our stunning collection could captivate you. As we use only handpicked lab certified diamonds to craft every masterpiece, rest assured that you get the best in terms of quality. To make things easier for you, we have categorized diamond jewellery; if you need assistance, we can help!
        </p>
      </section>

      <h2 style={{textAlign:"center",   }}>Diamond Section</h2>

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
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" /></a>
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

export default Diamond;
