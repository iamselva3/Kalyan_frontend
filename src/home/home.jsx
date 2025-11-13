import React, { useEffect, useRef, useState } from 'react'

import { FaRegEnvelope } from 'react-icons/fa'
import "./home.css"
import Navbar from '../nav/nav';
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import qrCode from "./phone.jpg"; // Adjust path as needed
import appPreview from "./qrcode.jpg";

const Home = () => {
    const [index, setIndex] = useState(0);
  const images = [img1, img2, img3, img4];
  const carouselRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
        <Navbar />
        <section className="slider_section">
        <div className="carousel">
          <div ref={carouselRef}>
            <a href="/home"><img id="carimg" src={images[index]} alt={`Slide ${index + 1}`} /></a>
          </div>
        </div>
      </section>  


      <div className="gold-jewellery-content">
      <section>
        <h2>Get Noticed With Our Exquisite Gold Jewellery</h2>
        <p>
          Among the things most cherished for hundreds of decades and a chosen metal to create artefacts and jewellery is the precious metal gold. Now, gold is symbolic of power, wealth, and strength. Gold jewellery has been conventionally used as a wedding gift for ages in different cultures. It is used to show affection and commitment. Regardless of your style, our assortment of gold jewellery has something that matches your taste. No matter what you want with your jewellery, be it showing someone that you love them or appreciating them for their deeds, our vast collection of necklaces, earrings, rings, bangles, and the like is crafted to cause unending happiness.
        </p>
      </section>

      <section>
        <h2>Buy Gold Jewellery That Ushers Endless Joy</h2>
        <p>
          Symbolic of success, royalty, and strength, the yellow metal’s strong and positive hue is elevated in our magnificent jewellery range. Our skilled craftsmen craft these gorgeous pieces in pure 22-karat gold. Take a look at our gold jewellery to discover bold and iconic gold rings, necklaces, earrings, bangles, pendants, and more that will turn out to be treasured items for decades to come. If you want to stand out for an upcoming occasion or want to elevate your everyday style, then buy gold jewelry online from Kalyan!
        </p>
      </section>

      <section>
        <h2>Radiate Elegance With Our Alluring Gold Jewellery, Ideal for Any Occasion</h2>
        <ul>
          <li><strong>Everyday wear:</strong> Simple yet elegant gold jewellery can be your best friend for everyday purposes. Go for one of our delicate studs or an eye-catching, simple gold bracelet before stepping out.</li>
          <li><strong>Weddings:</strong> Weddings are the ideal occasion to boast your gold jewellery. Steal the glances of the rest by sporting our traditional gold necklace with matching earrings. Or if you go with a matching pair of jewellery, then choose our necklace set and dazzling bangles.</li>
          <li><strong>Casual occasions:</strong> Take advantage of casual occasions to play around with striking and colourful gold jewellery. Try our heart-shaped gold earrings or lightweight gold necklace.</li>
          <li><strong>Formal occasions:</strong> Formal occasions call for graceful yet sophisticated gold jewellery. Settle for our dazzling heart and infinity-themed gold pendant, sparkling gold bangle, or abstract half-moon gold ring. Buy gold online from Kalyan today!</li>
        </ul>
      </section>

      <section>
        <h2>From Classic to Contemporary, Discover Your Next Favourite Jewel at Kalyan Online</h2>
        <p>
          The big deal about buying gold jewellery online is that it’s far more convenient. You can buy gold online without stepping out of your home. Moreover, you can exchange or return your gold jewellery at any time. Last but not least are the competitive prices that you can find for your jewellery. So, celebrate with elegance in every moment with the dazzle of jewellery from Kalyan. They’re crafted to make every moment unforgettable.
        </p>
      </section>

      <section>
        <h2>Classy Gold Jewellery Pieces at Kalyan</h2>

        <h3>Gold Chain</h3>
        <p>Go for an understated look with Kalyan gold chains... (full paragraph above)</p>

        <h3>Gold Earrings</h3>
        <p>From simple designs to more elaborate ones, we at Kalyan have a wide assortment of gold earrings...</p>

        <h3>Gold Bangles</h3>
        <p>Whether you’re looking for versatile bangles for daily wear or a trendy piece to shine on special occasions...</p>

        <h3>Gold Ring</h3>
        <p>Whether you are looking for self-gifting or take someone by surprise...</p>

        <h3>Gold Necklace</h3>
        <p>From classic to contemporary, we have stunning necklaces that appeal to women of all ages...</p>

        <h3>Gold Bracelet</h3>
        <p>Showcase your unique personality with one of our bracelets, ideal for men and women folks...</p>

        <h3>Gold Anklet</h3>
        <p>An anklet is a laid-down yet chic addition to your jewellery ensemble...</p>

        <h3>Gold Pendant</h3>
        <p>If you want to go minimal, then we urge you to take a look at our collection...</p>
      </section>

      <section>
        <h2>Adopt the Best Gold Jewellery Trends of the Year With Kalyan!</h2>
        <p>
          We at Kalyan take pride in embracing some of the hottest jewellery trends, from traditional favorites to modern innovations...
        </p>
      </section>
    </div>

    <div className="subscribe-section">
      <div className="subscribe-text">
        <h2>Subscribe to Kalyan Online</h2>
        <p>
          Get Promotions, inspirations and the latest news about brands and jewellery items directly in your inbox
        </p>
      </div>

      <div className="subscribe-form">
        <div className="input-wrapper">
          <FaRegEnvelope className="mail-icon" />
          <input
            type="email"
            placeholder="Enter your Email address"
            className="email-input"
          />
        </div>
        <button className="subscribe-button">SUBSCRIBE</button>
      </div>
    </div>

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

export default Home;
