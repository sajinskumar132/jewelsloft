import React from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import "./LoginPage.css";
import jewels_lofi_logo from "../../../assets/jewels_lofi_logo.png";
import diamond_icon from "../../../assets/diamond_icon.svg";
import ring_icon from "../../../assets/ring_icon.svg";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigation = useNavigate()
  return (
    <div className="main_login_container">
      <div className="login_container">
        {/* Background Overlay Texts */}

        <div className="bg_overlay_texts ol_mainsection">
           <h1>JEWEL`S LOFI</h1>
        </div>
        <div className="bg_overlay_texts ol_section1">
          <h1>Luxury</h1>
          <h2>Elegance</h2>
          <h3>Timeless Beauty</h3>
        </div>

        <div className="bg_overlay_texts ol_section2">
          <h1>Crafted</h1>
          <h2>Passion</h2>
          <h3>Enduring Style</h3>
        </div>

        {/* Logo + Brand */}

        {/* Card */}
        <div className="login_card">
          <div className="loginpage_brand_wrapper">
            <img
              src={jewels_lofi_logo}
              alt="Jewel's Loft"
              className="loginpage_brand_icon"
            />
            <h1 className="loginpage_brand_name">JEWEL'S LOFT</h1>
          </div>

          <h2 className="login_title">Welcome Back ✨</h2>
          <p className="login_subtitle">
            Login to continue your shopping journey
          </p>

          {/* Form */}
          <form className="login_form">
            <div className="input_group">
              <Mail size={18} />
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input_group">
              <Lock size={18} />
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="forgot_password">
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="login_btn">
              <LogIn size={18} /> Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>or</span>
          </div>

          {/* Google Login */}
          <button className="google_btn">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="google"
            />
            Sign in with Google
          </button>

          {/* Signup link */}
          <div className="signup_text">
            Don’t have an account? <a onClick={()=>{
              navigation('/signup')
            }}>Sign up</a>
          </div>
        </div>

        {/* Transparent Background Decorative Images */}
        <img src={diamond_icon} alt="diamond" className="bg_icon bg_icon1" />
        <img src={ring_icon} alt="ring" className="bg_icon bg_icon2" />
      </div>
    </div>
  );
}

export default LoginPage;
