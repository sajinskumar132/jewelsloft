// import React from "react";
// import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
// import "./ProductShorts.css";

// // Sample videos (replace with your product promo short videos)
// import short1 from "../../../../../assets/short1.mp4";

// function ProductShorts() {
//   const shorts = [
//     {
//       id: 1,
//       video: short1,
//       title: "Diamond Ring",
//       price: "₹4,999",
//     },
//     {
//       id: 2,
//       video: short1,
//       title: "Gold Necklace",
//       price: "₹9,999",
//     },
//     {
//       id: 3,
//       video: short1,
//       title: "Luxury Bangles",
//       price: "₹6,499",
//     },
//     {
//       id: 4,
//       video: short1,
//       title: "Elegant Earrings",
//       price: "₹3,499",
//     },
//   ];

//   const scroll = (direction) => {
//     const container = document.querySelector(".shorts_scroll");
//     if (direction === "left") {
//       container.scrollBy({ left: -320, behavior: "smooth" });
//     } else {
//       container.scrollBy({ left: 320, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="product_shorts_section">
//       <div className="shorts_overlay_text">Jewels Shorts</div>
//       <div className="shorts_header">
//         <h2 className="shorts_title">✨ Product Shorts</h2>
//         <button className="view_all_btn">View All</button>
//       </div>

//       <div className="shorts_container">
//         <button className="scroll_btn left" onClick={() => scroll("left")}>
//           <ChevronLeft size={24} />
//         </button>

//         <div className="shorts_scroll">
//           {shorts.map((item) => (
//             <div className="short_card" key={item.id}>
//               <video src={item.video} autoPlay loop muted playsInline />
//               <div className="short_info">
//                 <h3>{item.title}</h3>
//                 <p>{item.price}</p>
//                 <button className="buy_btn">
//                   <ShoppingBag size={18} /> Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button className="scroll_btn right" onClick={() => scroll("right")}>
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductShorts;


import React from "react";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import "./ProductShorts.css";

// Replace with your real short videos
import short1 from "../../../../../assets/short1.mp4";
import short2 from "../../../../../assets/short2.mp4";
function ProductShorts() {
  const shorts = [
    { id: 1, video: short1, title: "Diamond Ring", price: "₹4,999" },
    { id: 2, video: short2, title: "Gold Necklace", price: "₹9,999" },
    { id: 3, video: short1, title: "Luxury Bangles", price: "₹6,499" },
    { id: 4, video: short2, title: "Elegant Earrings", price: "₹3,499" },
    { id: 5, video: short1, title: "Diamond Ring", price: "₹4,999" },
  ];

  const scroll = (dir) => {
    const container = document.querySelector(".shorts_scroll");
    container.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <div className="product_shorts_section">
      <div className="shorts_overlay_text">Jewels Shorts</div>

      <div className="shorts_header">
        <h2 className="shorts_title">✨ Product Shorts</h2>
        <button className="view_all_btn">View All</button>
      </div>

      <div className="shorts_container">
        <button className="scroll_btn left" onClick={() => scroll("left")}>
          <ChevronLeft size={24} />
        </button>

        <div className="shorts_scroll">
          {shorts.map((item) => (
            <div className="short_card" key={item.id}>
              <video src={item.video} autoPlay loop muted playsInline />
              
              {/* Overlay details */}
              <div className="short_overlay">
                <div className="short_info">
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </div>
                <button className="buy_btn">
                  <ShoppingBag size={18} /> Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll_btn right" onClick={() => scroll("right")}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default ProductShorts;

