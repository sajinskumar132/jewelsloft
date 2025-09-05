import React, { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Gift,
  Share2,
  Copy,
  Mail,
  MessageCircle,
} from "lucide-react";
import "./ProductDetailsPage.css";
import sample_img from "../../../assets/cat_img_1.jpg";

function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(sample_img);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const images = [sample_img, sample_img, sample_img, sample_img];
  const productUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(productUrl);
    alert("Link copied to clipboard!");
    setShowShareMenu(false);
  };

  return (
    <div className="product_details_container">
      {/* Left: Images */}
      <div className="product_gallery">
        <img src={selectedImg} alt="main product" className="main_img" />
        <div className="thumbnail_row">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              className={`thumb_img ${selectedImg === img ? "active_thumb" : ""}`}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Info */}
      <div className="product_info">
        <div className="info_header">
          <h1 className="product_title">Elegant Gold Necklace</h1>

          <div className="header_icons">
            <button className="pdp_wishlist_btn">
              <Heart size={20} />
            </button>

            <div className="share_wrapper">
              <button
                className="share_btn"
                onClick={() => setShowShareMenu(!showShareMenu)}
              >
                <Share2 size={20} />
              </button>

              {showShareMenu && (
                <div className="share_menu">
                  <button onClick={handleCopy}>
                    <Copy size={16} /> Copy Link
                  </button>
                  <a
                    href={`mailto:?subject=Check this product&body=${productUrl}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Mail size={16} /> Email
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(productUrl)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="product_desc">
          Discover the timeless elegance of our handcrafted gold necklace,
          designed to add a touch of sophistication to every occasion.
        </p>

        {/* Price */}
        <div className="price_box">
          <span className="discount_price">₹4,999</span>
          <span className="original_price">₹6,999</span>
          <span className="offer_tag">Special Offer</span>
        </div>

        {/* Highlights */}
        <ul className="product_highlights">
          <li>✔ 22KT Pure Gold</li>
          <li>✔ Weight: 25 grams</li>
          <li>✔ 1-Year Warranty</li>
          <li>✔ Free Gift Box</li>
        </ul>

        {/* Quantity */}
        <div className="quantity_box">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        {/* Action Buttons */}
        <div className="action_btns">
          <button className="add_cart_btn">
            <ShoppingCart size={18} /> Add to Cart
          </button>
          <button className="pdp_buy_btn">Buy Now</button>
        </div>

        {/* Delivery */}
        <div className="delivery_box">
          <Truck size={20} />
          <div>
            <p>
              Deliver to <strong>123 Main Street, Kochi</strong>
            </p>
            <button className="change_address_btn">Change Address</button>
          </div>
        </div>

        {/* Extra Info */}
        <div className="extra_info">
          <div>
            <ShieldCheck size={20} /> Certified Hallmark Jewelry
          </div>
          <div>
            <Gift size={20} /> Free Gift Wrapping Available
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
