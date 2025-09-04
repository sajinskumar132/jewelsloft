import React, { useRef } from "react";
import "./Category.css";
import cat_image_1 from "../../../../../assets/cat_img_1.jpg";
import cat_image_2 from "../../../../../assets/cat_img_2.jpg";
import cat_image_3 from "../../../../../assets/cat_img_3.jpg";
import cat_image_4 from "../../../../../assets/cat_img_4.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ✅ icons
function Category() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200; // pixels per click
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const categories = [
    { img: cat_image_1, name: "Gold Ring" },
    { img: cat_image_2, name: "Gold Bangles" },
    { img: cat_image_3, name: "Gold Earrings" },
    { img: cat_image_4, name: "Gold Necklace" },
    { img: cat_image_1, name: "Bracelets" },
    { img: cat_image_2, name: "Chains" },
    { img: cat_image_3, name: "Anklets" },
    { img: cat_image_4, name: "Designer Sets" },
    { img: cat_image_1, name: "Temple Jewellery" },
    { img: cat_image_2, name: "Chokers" },
  ];

  return (
    <div className="category_section">
      <div className="category_overlay_text">Timeless Elegance</div>
      {/* Header */}
      <div className="category_header">
        <div>
          <h2>Our Collection</h2>
          <p>Multiple Categories to Explore</p>
        </div>
        <button className="view_all_btn">View All</button>
      </div>

      {/* Carousel with Arrows */}
      <div className="carousel_container">
        <button className="scroll_btn left" onClick={() => scroll("left")}>
          <ChevronLeft size={28} />
        </button>

        <div className="category_scroll" ref={scrollRef}>
          {categories.map((cat, index) => (
            <div key={index} className="category_circle">
              <img src={cat.img} alt={cat.name} />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>

        <button className="scroll_btn right" onClick={() => scroll("right")}>
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}

export default Category;
