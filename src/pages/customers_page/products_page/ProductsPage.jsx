import React, { useState } from "react";
import ProductFilter from "./sub_components/product_filter/ProductFilter";
import { Heart, ShoppingCart, Zap, Filter } from "lucide-react";
import "./ProductsPage.css";
import sample_img from "../../../assets/cat_img_1.jpg";
import { useNavigate } from "react-router-dom";
function ProductsPage() {
    const navigation=useNavigate()
  const [filters, setFilters] = useState({});
  const [showFilter, setShowFilter] = useState(true); // collapse/expand
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["Necklace", "Rings", "Earrings", "Bracelets", "Chokers"];

  // Dummy Products (simulate 9 items)
  const products = Array.from({ length: 25 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    description: "Handcrafted with timeless elegance.",
    img: sample_img,
    price: 2500 + i * 100,
    discountPrice: 1999 + i * 80,
    discount: 20,
  }));

  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="products_page">
      {/* Overlay Title */}
      <div className="products_overlay_text">Timeless Elegance</div>

      {/* Sidebar Filter */}
      {showFilter && (
        <ProductFilter categories={categories} onFilterChange={setFilters} />
      )}

      {/* Product List */}
      <div className="products_list">
        <div className="products_header">
          <h2>Our Collections</h2>
          {/* <p className="applied_filters">
            Filters: {Object.keys(filters).length ? JSON.stringify(filters) : "None"}
          </p> */}

          {/* Collapse Filter Button */}
          <button
            className="filter_toggle_btn"
            onClick={() => setShowFilter(!showFilter)}
          >
            <Filter size={18} />
            {showFilter ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* Grid */}
        <div className="products_grid">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="product_card" onClick={()=>{
              navigation(`/product/${product.id}/product_details`)
            }}>
              <div className="offer_badge">-{product.discount}%</div>

              <div className="product_img_container">
                <img src={product.img} alt={product.name} className="product_img" />
                <button className="wishlist_btn">
                  <Heart size={20} />
                </button>
              </div>

              <h3 className="product_name">{product.name}</h3>
              <p className="product_desc">{product.description}</p>

              <div className="price_section">
                <span className="discount_price">₹{product.discountPrice}</span>
                <span className="original_price">₹{product.price}</span>
              </div>

              <div className="product_actions">
                <button className="action_btn add_cart">
                  <ShoppingCart size={18} /> Add to Cart
                </button>
                <button className="action_btn buy_now">
                  <Zap size={18} /> Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`page_btn ${currentPage === idx + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
