import React from "react";
import "./Hero.css";
import hero_image_1 from "../../../../../assets/hero_img_1.jpg";
import hero_image_2 from "../../../../../assets/hero_img_2.jpg";
import hero_image_3 from "../../../../../assets/hero_img_3.jpg";
import hero_image_4 from "../../../../../assets/hero_img_4.jpg";

function Hero() {
  return (
    <div className="hero_main_container">
      {/* Left Content */}
      <div className="hero_content">
        <h1 className="hero_title">
          Discover Elegance with <span>JEWEL`S LOFT</span>
        </h1>
        <p className="hero_subtitle">Fresh Collections • Starting at just ₹9</p>
        <button className="hero_btn">Shop More</button>
      </div>

      {/* Right Collage */}
      <div className="hero_image_grid">
        <img src={hero_image_1} alt="Jewelslofi" className="img1" />
        <img src={hero_image_2} alt="Jewelslofi" className="img2" />
        <img src={hero_image_3} alt="Jewelslofi" className="img3" />
        <img src={hero_image_4} alt="Jewelslofi" className="img4" />
      </div>
    </div>
  );
}

export default Hero;
