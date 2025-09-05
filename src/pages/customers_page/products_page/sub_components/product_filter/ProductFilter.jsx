import React, { useState } from "react";
import "./ProductFilter.css";

function ProductFilter({ categories = [], onFilterChange }) {
  const [price, setPrice] = useState(5000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("");

  const handleCategoryChange = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updated);
    onFilterChange({ price, categories: updated, sortBy });
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    onFilterChange({ price: e.target.value, categories: selectedCategories, sortBy });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    onFilterChange({ price, categories: selectedCategories, sortBy: e.target.value });
  };

  const clearFilters = () => {
    setPrice(5000);
    setSelectedCategories([]);
    setSortBy("");
    onFilterChange({ price: 5000, categories: [], sortBy: "" });
  };

  return (
    <div className="filter-container">
      <h3 className="filter-title">Filters</h3>

      {/* Price Filter */}
      <div className="filter-section">
        <label className="filter-label">Price Range: ₹0 - ₹{price}</label>
        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          value={price}
          onChange={handlePriceChange}
          className="range-slider"
        />
      </div>

      {/* Category Filter */}
      <div className="filter-section">
        <label className="filter-label">Categories</label>
        <div className="checkbox-group">
          {categories.map((cat, idx) => (
            <label key={idx} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="filter-section">
        <label className="filter-label">Sort By</label>
        <select value={sortBy} onChange={handleSortChange} className="sort-dropdown">
          <option value="">Select</option>
          <option value="bestseller">Best Seller</option>
          <option value="new">New Arrivals</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>

      {/* Clear Button */}
      <button onClick={clearFilters} className="clear-btn">Clear Filters</button>
    </div>
  );
}

export default ProductFilter;
