import React from "react";
import { Tag, ShoppingBag } from "lucide-react";
import cat_img_1 from "../../../../../assets/cat_img_1.jpg";
import cat_img_2 from "../../../../../assets/cat_img_2.jpg";
import cat_img_3 from "../../../../../assets/cat_img_3.jpg";
import './BestOffer.css'
function BestOffer() {
  const offers = [
    {
      id: 1,
      name: "Elegant Diamond Ring",
      price: 4999,
      oldPrice: 6999,
      discount: "30% OFF",
      img: cat_img_1,
    },
    {
      id: 2,
      name: "Classic Gold Chain",
      price: 2999,
      oldPrice: 3999,
      discount: "25% OFF",
      img: cat_img_2,
    },
    {
      id: 3,
      name: "Luxury Bangle Set",
      price: 6999,
      oldPrice: 9999,
      discount: "35% OFF",
      img: cat_img_3,
    },
     {
      id: 4,
      name: "Elegant Diamond Ring",
      price: 4999,
      oldPrice: 6999,
      discount: "30% OFF",
      img: cat_img_1,
    },
  ];

  return (
    <div className="best_offer_section">
      <div className="offer_overlay_text">Exclusive Deals</div>
      <h2 className="offer_title">🔥 Best Offers for You</h2>
      <p className="offer_subtitle">Grab the hottest deals before they’re gone!</p>

      <div className="offer_grid">
        {offers.map((item) => (
          <div className="offer_card" key={item.id}>
            <div className="offer_img_wrapper">
              <img src={item.img} alt={item.name} />
              <span className="discount_badge">{item.discount}</span>
            </div>
            <div className="offer_info">
              <h3>{item.name}</h3>
              <p className="price">
                ₹{item.price}{" "}
                <span className="old_price">₹{item.oldPrice}</span>
              </p>
              <button className="grab_btn">
                <ShoppingBag size={18} />
                Grab Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="view_more_wrapper">
        <button className="view_more_btn">View All Offers</button>
      </div>
    </div>
  );
}

export default BestOffer;
