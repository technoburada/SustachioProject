import React, { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";

import "./Productlist.css";
import Cartoonn from "./Cartoonn.jpg";

const products = [
  {
    id: 1,
    name: "2 Quantity Apple Pack",
    category: "Fruits",
    rating: 4.5,
    image: Cartoonn,
    quantity: 2,
  },
  {
    id: 2,
    name: "20 Quantity Rice Bag",
    category: "Grains",
    rating: 4.8,
    image: Cartoonn,
    quantity: 20,
  },
  {
    id: 3,
    name: "30 Quantity Wheat Flour",
    category: "Grains",
    rating: 4.0,
    image: Cartoonn,
    quantity: 30,
  },
  {
    id: 4,
    name: "2 Quantity Apple Pack",
    category: "Fruits",
    rating: 4.5,
    image: Cartoonn,
    quantity: 2,
  },
  {
    id: 5,
    name: "20 Quantity Rice Bag",
    category: "Grains",
    rating: 4.8,
    image: Cartoonn,
    quantity: 20,
  },
  {
    id: 6,
    name: "30 Quantity Wheat Flour",
    category: "Grains",
    rating: 4.0,
    image: Cartoonn,
    quantity: 30,
  },
  {
    id: 7,
    name: "2 Quantity Apple Pack",
    category: "Fruits",
    rating: 4.5,
    image: Cartoonn,
    quantity: 2,
  },
  {
    id: 8,
    name: "20 Quantity Rice Bag",
    category: "Grains",
    rating: 4.8,
    image: Cartoonn,
    quantity: 200,
  },
  {
    id: 9,
    name: "30 Quantity Wheat Flour",
    category: "Grains",
    rating: 4.0,
    image: Cartoonn,
    quantity: 30,
  },
];

const Productlist = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [desiredQuantity, setDesiredQuantity] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Featured");

  const itemsPerPage = 9; // Items per page

  // Handle sorting
  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortValue === "Quantity: Low to High") return a.quantity - b.quantity;
      if (sortValue === "Quantity: High to Low") return b.quantity - a.quantity;
      if (sortValue === "Rating") return b.rating - a.rating;
      return a.id - b.id; // Default to "Featured"
    });
    setFilteredProducts(sortedProducts);
  };

  // Handle category filter
  const handleCategoryChange = (e) => {
    const category = e.target.id;
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    }
  };

  // Handle quantity filter
  const handleQuantityChange = (e) => {
    const quantity = e.target.id.replace("quantity", ""); // Extract numeric quantity
    setDesiredQuantity(quantity);
  };

  const handleManualQuantityChange = (e) => {
    setDesiredQuantity(e.target.value);
  };

  // Apply filter based on category and quantity
  const handleFilter = () => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category.toLowerCase());
      const quantityMatch =
        !desiredQuantity || product.quantity === Number(desiredQuantity);
      return categoryMatch && quantityMatch;
    });
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Render stars for rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="productlist-stars-with-rating">
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
        <span>{` (${rating.toFixed(1)})`}</span>
      </div>
    );
  };

  return (
    <div className="product-list-container">
      <div className="productlist-container">
        {/* Sidebar */}
        <div className="productlistsidebar">
          <div className="productlistfilter-section">
            <h3>Tableware Plate Category</h3>
            <ul>
              <li>
                <input
                  type="checkbox"
                  id="fruits"
                  onChange={handleCategoryChange}
                />
                <label htmlFor="fruits">
                  Fruits <span>[20]</span>
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="grains"
                  onChange={handleCategoryChange}
                />
                <label htmlFor="grains">
                  Grains <span>[54]</span>
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="snacks"
                  onChange={handleCategoryChange}
                />
                <label htmlFor="snacks">
                  Snacks & Spice <span>[64]</span>
                </label>
              </li>
            </ul>
          </div>

          <div className="productlistweight-section">
            <h3>Quantity</h3>
            <ul>
              <li>
                <input
                  type="checkbox"
                  id="2quantity"
                  onChange={handleQuantityChange}
                />
                <label htmlFor="2quantity">2 Quantity Pack</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="20quantity"
                  onChange={handleQuantityChange}
                />
                <label htmlFor="20quantity">20 Quantity Pack</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="30quantity"
                  onChange={handleQuantityChange}
                />
                <label htmlFor="30quantity">30 Quantity Pack</label>
              </li>
            </ul>
            <div className="productlistmanual-weight-input">
              <label htmlFor="manual-quantity">Enter Desired Quantity: </label>
              <input
                type="number"
                id="manual-quantity"
                value={desiredQuantity}
                min="1"
                placeholder="e.g., 5"
                onChange={handleManualQuantityChange}
              />
            </div>
            {desiredQuantity && (
              <p className="productlistselected-weight">
                Selected Quantity: {desiredQuantity}
              </p>
            )}
            <button className="productlistfilter-button" onClick={handleFilter}>
              Check the availibilty
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="productlistproduct-list-header">
          <p> <i class="fas fa-box"></i> We found {filteredProducts.length} items for you!</p>

{/* Sorting Dropdown */}
<div className="productlistproductlistsort-by-section">
  <label htmlFor="sort-by">
    <i className="fas fa-sort" style={{ marginRight: "8px" }}></i> 
  </label>
  <select
    id="sort-by"
    value={sortBy}
    onChange={(e) => handleSortChange(e.target.value)}
  >
    <option value="Featured">Featured</option>
    <option value="Quantity: Low to High">Quantity: Low to High</option>
    <option value="Quantity: High to Low">Quantity: High to Low</option>
    <option value="Rating">Rating High First</option>
  </select>
</div>
        </div>

        {/* Product Grid */}
        <div className="productlistproduct-grid">
          {currentItems.map((product) => (
            <div className="productlistproduct-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>Category: {product.category}</p>
              <p>Quantity: {product.quantity}</p>
              <div className="productlistrating">{renderStars(product.rating)}</div>
              <a href={`/Tablewareplate/${product.id}`}>
                <button className="productleftchoose">
                  Choose <HiArrowCircleRight size={24} />
                </button>
                <button className="productmoretail">
                  More Detail <HiArrowCircleRight size={24} />
                </button>
                <i className="fas fa-shopping-bag"> </i>
              </a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="fas fa-angle-left"></i> Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`pagination-button ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productlist;