import React, { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { products } from "../../data/mockdata";
import "./productdetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product.id); 


  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (isInCart) {
      toast.info("This item is already in your cart!");
      return;
    }
    dispatch(addToCart({ ...product, quantity }));
    setAddedToCart(true);
    toast.success(`${product.name} added to cart! 🎉`);

  };

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="product-detail-container">
      <img
        src={product.image}
        alt={product.name}
        className="product-detail-image"
      />

      <div className="product-detail-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>

        <div className="quantity-controls">
          <button
           onClick={() => handleQuantityChange(-1)}
           disabled={quantity === 1 || isInCart}
           className={isInCart ? "disabled-button" : ""}
           >-</button>
          <span>{quantity}</span>
          <button
           onClick={() => handleQuantityChange(1)}
           disabled={isInCart}
           className={isInCart ? "disabled-button" : ""}
            >+</button>
        </div>

        <button 
           className='add-to-cart-btn '
           onClick={handleAddToCart}
           disabled={isInCart}
         > 
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </button>

        {/* Optional: Wishlist button */}
        <button className="wishlist-btn">♡ Add to Wishlist</button>

        {/* Optional: More Like This */}
        <div className="more-like-this">
          <h4>More like this</h4>
          <p>Suggestions based on category: {product.category}</p>
          {/* You can show filtered products here later */}
          <div className="more-like-this-list">
  {products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .map((similar) => (
      <div key={similar.id} className="similar-product-card">
        <img src={similar.image} alt={similar.name} />
        <p>{similar.name}</p>
        <p>${similar.price.toFixed(2)}</p>
      </div>
    ))}
</div>

        </div>
      </div>
    </div>
  );
}
