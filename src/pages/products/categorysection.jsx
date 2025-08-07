

import { toast } from "react-toastify";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";

import { addToCart} from "../../features/cart/cartSlice";
import "./products.css";


export default function CatProducts({ products }) {
    
  const dispatch = useDispatch();
  return (
    <div className="home">
      

      <h2>Explore our products and enjoy great deals!</h2>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
            <img 
              src={product.image} 
              alt={product.name}
              className="product-iamge"
              onError={(e) => {
                e.target.onerror = null; // prevents looping
                e.target.src = "https://via.placeholder.com/150"; // fallback image
              }} />
            
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            </Link>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => {
              dispatch(addToCart({ ...product, quantity: 1 }));
              toast.success(`${product.name} added to cart !`);
              }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}