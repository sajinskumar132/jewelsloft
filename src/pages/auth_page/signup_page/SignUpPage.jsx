import React from "react";
import { Mail, Lock, KeyRound, LogIn } from "lucide-react";
import "./SignUpPage.css";
import jewels_lofi_logo from "../../../assets/jewels_lofi_logo.png";
import diamond_icon from "../../../assets/diamond_icon.svg";
import ring_icon from "../../../assets/ring_icon.svg";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    const navigation=useNavigate()
  return (
    <div className="SignUpPage_main_container">
      <div className="SignUpPage_container">
        {/* Background Overlay Texts */}
        <div className="SignUpPage_bg_overlay_texts SignUpPage_ol_mainsection">
          <h1>JEWEL`S LOFI</h1>
        </div>
        <div className="SignUpPage_bg_overlay_texts SignUpPage_ol_section1">
          <h1>Luxury</h1>
          <h2>Elegance</h2>
          <h3>Timeless Beauty</h3>
        </div>
        <div className="SignUpPage_bg_overlay_texts SignUpPage_ol_section2">
          <h1>Crafted</h1>
          <h2>Passion</h2>
          <h3>Enduring Style</h3>
        </div>

        {/* Card */}
        <div className="SignUpPage_card">
          <div className="SignUpPage_brand_wrapper">
            <img
              src={jewels_lofi_logo}
              alt="Jewel's Loft"
              className="SignUpPage_brand_icon"
            />
            <h1 className="SignUpPage_brand_name">JEWEL'S LOFT</h1>
          </div>

          <h2 className="SignUpPage_title">Create Your Account ✨</h2>
          <p className="SignUpPage_subtitle">Join us and start your journey</p>

          {/* Form */}
          <form className="SignUpPage_form">
            <div className="SignUpPage_input_group">
              <Mail size={18} />
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="SignUpPage_input_group">
              <Lock size={18} />
              <input type="password" placeholder="Create a password" required />
            </div>

            <div className="SignUpPage_input_group">
              <Lock size={18} />
              <input
                type="password"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* <div className="SignUpPage_input_group">
              <KeyRound size={18} />
              <input type="text" placeholder="Enter OTP" required />
            </div> */}

            <button type="submit" className="SignUpPage_btn">
              <LogIn size={18} /> Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="SignUpPage_divider">
            <span>or</span>
          </div>

          {/* Google SignUp */}
          <button className="SignUpPage_google_btn">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="google"
            />
            Sign up with Google
          </button>

          {/* Already have account */}
          <div className="SignUpPage_footer_text">
            Already have an account? <a onClick={()=>{
              navigation('/login')
            }}>Login</a>
          </div>
        </div>

        {/* Transparent Decorative Icons */}
        <img
          src={diamond_icon}
          alt="diamond"
          className="SignUpPage_bg_icon SignUpPage_bg_icon1"
        />
        <img
          src={ring_icon}
          alt="ring"
          className="SignUpPage_bg_icon SignUpPage_bg_icon2"
        />
      </div>
    </div>
  );
}

export default SignUpPage;
