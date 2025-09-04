import React from "react";
import "./LatestNewsAndContactUs.css";
import promoVideo from "../../../../../assets/promo_video.mp4"; // replace with your video
function LatestNewsAndContactUs() {
  return (
    <div className="news_contact_section">
      {/* Latest News with Video Background */}
      <div className="latest_news">
        <video autoPlay muted loop playsInline className="bg_video">
          <source src={promoVideo} type="video/mp4" />
        </video>

        <div className="news_overlay">
          <h2 className="news_title">✨ Latest News</h2>
          <p className="news_subtitle">
            Enjoy <span>20% OFF</span> on your very first order!
          </p>
          <button className="shop_now_btn">Shop Now</button>
        </div>
      </div>

      {/* Contact Us */}
      <div className="contact_us">
        <h2 className="contact_title">📩 Contact Us</h2>
        <form className="contact_form">
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <textarea placeholder="Enter your message" rows="4" required />
          <button type="submit" className="send_btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default LatestNewsAndContactUs;
