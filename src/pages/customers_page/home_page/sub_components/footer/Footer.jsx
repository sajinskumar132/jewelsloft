import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "../../../../../assets/jewels_lofi_logo.png"; // replace with your logo

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        {/* Brand Section */}
        <div className="footer_brand">
          <img src={logo} alt="Jewels Loft Logo" className="footer_logo" />
          <h2 className="footer_name">JEWEL’S LOFT</h2>
          <p className="footer_tagline">
            Timeless Elegance • Crafted with Perfection
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer_links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#bestseller">Best Sellers</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer_links">
          <h3>Support</h3>
          <ul>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#shipping">Shipping & Returns</a></li>
            <li><a href="#policy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer_social">
          <h3>Follow Us</h3>
          <div className="social_icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Youtube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer_bottom">
        <p>© {new Date().getFullYear()} JEWEL’S LOFT. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
