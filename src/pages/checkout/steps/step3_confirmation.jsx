// src/pages/checkout/steps/Step3_Confirmation.jsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import "../checkout.css";

export default function Step3_Confirmation() {
  // Simple order number and delivery date logic
  const orderId = Math.floor(Math.random() * 900000 + 100000); // 6-digit
  const today = new Date();
  const deliveryStart = new Date(today.setDate(today.getDate() + 3)).toDateString();
  const deliveryEnd = new Date(today.setDate(today.getDate() + 2)).toDateString();


  return (
    <div className="checkout-container">
      <div className="confirmation-box">
        <h2>🎉 Order Confirmed!</h2>
        <p>Your order has been placed successfully.</p>
        <p><strong>Order ID:</strong> #{orderId}</p>
        <p><strong>Est. Delivery:</strong> {deliveryStart} - {deliveryEnd}</p>
        <Link to="/" className="checkout-buttons">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}
