import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./step2_review.css";

export default function Step2_Review() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const shippingInfo = useSelector((state) => state.checkout.shippingInfo);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCharge = subtotal > 1000 ? 0 : 50; // Mock logic
  const totalAmount = subtotal + shippingCharge;

  const handleProceed = () => {
    navigate("/checkout/payment");
  };

  return (
    <div className="review-container">
      <h2>Review Your Order</h2>

      {/* Shipping Info Recap */}
      <div className="shipping-summary">
        <h3>Shipping Information</h3>
        {shippingInfo ? (
          <ul>
            <li><strong>Name:</strong> {shippingInfo.name}</li>
            <li><strong>Address:</strong> {shippingInfo.address}</li>
            <li><strong>City:</strong> {shippingInfo.city}</li>
            <li><strong>Postal Code:</strong> {shippingInfo.postalCode}</li>
            <li><strong>Country:</strong> {shippingInfo.country}</li>
          </ul>
        ) : (
          <p>No shipping information available.</p>
        )}
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="item-list">
            {cartItems.map((item) => (
              <li key={item.id} className="item-row">
                <img src={item.image} alt={item.name} className="item-img" />
                <div className="item-details">
                  <p>{item.name}</p>
                  <p>Qty: {item.quantity}</p>
                  <p>₹ {item.price * item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Pricing Summary */}
        <div className="pricing-summary">
          <p><strong>Subtotal:</strong> ₹ {subtotal}</p>
          <p><strong>Shipping:</strong> ₹ {shippingCharge === 0 ? "Free" : shippingCharge}</p>
          <p className="total"><strong>Total: ₹ {totalAmount}</strong></p>
        </div>
      </div>

      {/* Proceed Button */}
      <div className="proceed-button">
        <button onClick={handleProceed} disabled={cartItems.length === 0}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

