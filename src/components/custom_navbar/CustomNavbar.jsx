import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import jewels_lofi_logo from "../../assets/jewels_lofi_logo.png";
import "./CustomNavbar.css";

function CustomNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (sectionId) => {
    // This function will handle the navigation without a full page reload.
    // For example, you can use it to scroll to a specific section on the page.
    console.log(`Navigating to section: ${sectionId}`);
    // Example: document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <div className="main_navbar_container">
      <div className="navbar">
        {/* Navbar Brand and Logo */}
        <div className="navbar-brand">
          <img src={jewels_lofi_logo} alt="JewelsLoft Logo" className="logo" />
          <h1 className="brand-name">JEWEL'S LOFT</h1>
        </div>

        {/* Mobile menu toggle button */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <span onClick={() => handleNavigation("home")}>Home</span>
          </li>
          <li>
            <span onClick={() => handleNavigation("new-arrivals")}>
              New Arrivals
            </span>
          </li>
          <li>
            <span onClick={() => handleNavigation("minimal-wear")}>
              Best sellers
            </span>
          </li>
          <li>
            <span onClick={() => handleNavigation("office-wear")}>Offers</span>
          </li>
          <li>
            <span onClick={() => handleNavigation("temple-jewellery")}>
              Product Shorts
            </span>
          </li>
          <li>
            <span onClick={() => handleNavigation("choker-collections")}>
              Contact US
            </span>
          </li>
        </ul>

        {/* Login/Signup Button */}
        <div className="navbar-auth">
          <button className="login-btn">Login / Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default CustomNavbar;
