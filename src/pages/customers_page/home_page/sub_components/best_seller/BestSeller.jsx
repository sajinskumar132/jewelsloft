import React from "react";
import "./BestSeller.css";
import sample_img from "../../../../../assets/cat_img_1.jpg"; // replace with real product images
import { ShoppingCart } from "lucide-react";
function BestSeller() {
  const products = [
    {
      id: 1,
      name: "Elegant Gold Ring",
      img: sample_img,
      price: 4999,
      discountPrice: 3499,
      offer: 30,
    },
    {
      id: 2,
      name: "Classic Bangles Set",
      img: sample_img,
      price: 7999,
      discountPrice: 5599,
      offer: 25,
    },
    {
      id: 3,
      name: "Royal Necklace",
      img: sample_img,
      price: 14999,
      discountPrice: 10499,
      offer: 30,
    },
    {
      id: 4,
      name: "Diamond Studs",
      img: sample_img,
      price: 9999,
      discountPrice: 6999,
      offer: 30,
    },
  ];

  return (
    <div className="bestseller_container">
      <div className="bestseller_overlay_text">Golden Picks</div>
      {/* Section Heading */}
      <div className="bestseller_header">
        <div>
          <h2>Best Sellers</h2>
          <p>New Collections Curated for You</p>
        </div>
        <button className="view_more_btn">View More</button>
      </div>

      {/* Product Grid */}
      <div className="bestseller_grid">
        {products.map((product) => (
          <div key={product.id} className="product_card">
            <div className="offer_badge">{product.offer}%</div>
            <img src={product.img} alt={product.name} className="product_img" />
            <h3 className="product_name">{product.name}</h3>
            <div className="price_section">
              <span className="discount_price">₹{product.discountPrice}</span>
              <span className="original_price">₹{product.price}</span>
            </div>
            <button className="shop_btn">
              <ShoppingCart size={18} />    Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
