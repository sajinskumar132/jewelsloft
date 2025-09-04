import React, { useRef } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import cat_img_1 from "../../../../../assets/cat_img_1.jpg";
import cat_img_2 from "../../../../../assets/cat_img_2.jpg";
import cat_img_3 from "../../../../../assets/cat_img_3.jpg";
import './NewArrivals.css'
function NewArrivals() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const products = [
    {
      id: 1,
      name: "Elegant Gold Necklace",
      price: 3499,
      oldPrice: 4299,
      offer: "18% OFF",
      img: cat_img_1,
    },
    {
      id: 2,
      name: "Stylish Gold Earrings",
      price: 1299,
      oldPrice: 1599,
      offer: "20% OFF",
      img: cat_img_2,
    },
    {
      id: 3,
      name: "Luxury Gold Bracelet",
      price: 2299,
      oldPrice: 2899,
      offer: "21% OFF",
      img: cat_img_3,
    },
    {
      id: 4,
      name: "Charming Gold Ring",
      price: 899,
      oldPrice: 1199,
      offer: "25% OFF",
      img: cat_img_2,
    },
    {
      id: 5,
      name: "Classic Gold Anklet",
      price: 1599,
      oldPrice: 1999,
      offer: "20% OFF",
      img: cat_img_1,
    },
  ];

  return (
    <div className="new_arrivals_section">
      <div className="overlay_text">Just In</div>
      <h2 className="section_title">✨ New Arrivals</h2>
      <p className="section_subtitle">Be the first to own the latest trends</p>

      {/* Scrollable Product List */}
      <div className="scroll_container">
        <button className="scroll_btn left" onClick={scrollLeft}>
          <ChevronLeft size={28} />
        </button>

        <div className="new_arrivals_scroll" ref={scrollRef}>
          {products.map((item) => (
            <div className="new_card" key={item.id}>
              <div className="img_wrapper">
                <span className="new_badge">New</span>
                <img src={item.img} alt={item.name} />
              </div>
              <div className="new_info">
                <h3>{item.name}</h3>
                <div className="price_offer_row">
                  <p className="price">
                    ₹{item.price}{" "}
                    <span className="old_price">₹{item.oldPrice}</span>
                  </p>
                  <p className="offer">{item.offer}</p>
                </div>

                <div className="new_actions">
                  <button className="outline_btn">Shop Now</button>
                  <button className="cart_btn">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll_btn right" onClick={scrollRight}>
          <ChevronRight size={28} />
        </button>
      </div>

      {/* View More Button */}
      <div className="view_more_wrapper">
        <button className="view_more_btn">View More</button>
      </div>
    </div>
  );
}

export default NewArrivals;
