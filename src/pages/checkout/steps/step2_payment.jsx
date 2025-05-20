import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../features/cart/cartSlice";
import { clearShippingInfo } from "../../../features/checkout/checkoutSlice";
import { setPaymentMethod } from "../../../features/checkout/checkoutSlice";
import "../checkout.css";

export default function Step2_Payment() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [method, setMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: dispatch to redux
    dispatch(setPaymentMethod(method));
    navigate("/checkout/confirmation");  
    dispatch(clearCart());
    dispatch(clearShippingInfo()); // Clear the cart after payment method selection
  };

  return (
    <div className="checkout-container">
       <div className="checkout-step">
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Payment Method</h2>
      <label><input type="radio" name="method" value="card" onChange={(e) => setMethod(e.target.value)} required /> Credit/Debit Card</label>
      <label><input type="radio" name="method" value="upi" onChange={(e) => setMethod(e.target.value)} /> UPI</label>
      <label><input type="radio" name="method" value="cod" onChange={(e) => setMethod(e.target.value)} /> Cash on Delivery</label>
      <div className="button-group">
        <button 
        type="button" 
        onClick={() => {
          navigate('/checkout');
        }}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
    </div>
    </div>
  );
}
