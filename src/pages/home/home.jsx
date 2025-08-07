import React from "react";
import { Link } from "react-router-dom";
import CatProducts from "../products/categorysection";
import {products} from '../../data/mockdata'; // Adjust path if needed
import "./home.css";



const Home = () => {
  // Pick 6 random products for featured section
  const featuredProducts = products.slice(0, 6);
  const filteredProducts = products.filter((product) => product.category === "Fashion" || product.category === "Electronics" || product.category === "Home Decor" || product.category === "Books");

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Discover Your Style with ShopSphere</h1>
        <p>Trendy Fashion | Cool Gadgets | Cozy Home Decor</p>
        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </section>

      {/* Featured Categories Section */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <button className="category-card">Fashion</button>
          <button className="category-card">Electronics</button>
          <button className="category-card">Home Decor</button>
          <button className="category-card">Books</button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/products">
          <button>View All Products</button>
        </Link>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About ShopSphere</h2>
        <p>
          At ShopSphere, we bring you hand-picked fashion, tech, and home essentials — 
          all at your fingertips. Happy shopping!
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 ShopSphere. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;
