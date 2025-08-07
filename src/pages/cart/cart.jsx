import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import "./cart.css";

import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../features/cart/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="cart-items">
          <AnimatePresence>
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                className="cart-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>

                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="cart-item-actions">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      dispatch(removeFromCart(item.id));
                      toast.info(`${item.name} removed from cart.`);
                    }}
                  >
                    Remove
                  </motion.button>
                </div>
              </motion.div>
            ))}

            <div className="cart-summary">
              <h3>Cart Summary</h3>
              <p>
                Total Items:{" "}
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </p>
              <p>
                Total Amount: $
                {cartItems
                  .reduce((acc, item) => acc + item.quantity * item.price, 0)
                  .toFixed(2)}
              </p>
              <button
                onClick={() => {
                  dispatch(clearCart());
                  toast.info("Cart cleared.");
                }}
              >
                Clear Cart
              </button>
              <Link to="/shopSphere/checkout"
                 className="checkout-button">Proceed to Checkout
              </Link>
            </div>
          </AnimatePresence>
        </div>
      ) : (
        <>
          <p>Your cart is currently empty.</p>
          <p>Browse our products and add items to your cart!</p>
          <Link to="/shopSphere/products">Go to Products</Link>
        </>
      )}
    </div>
  );
}
