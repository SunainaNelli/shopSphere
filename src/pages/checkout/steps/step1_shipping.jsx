import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setShippingInfo } from "../../../features/checkout/checkoutSlice";
import "../checkout.css";

export default function Step1_Shipping() {
    const dispatch = useDispatch();
    const navigate= useNavigate();
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: dispatch to redux
    dispatch(setShippingInfo(form));
    navigate('/checkout/review');
  };

  return (
    <div className="checkout-container">
       <div className="checkout-step">
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Shipping Information</h2>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <input type="text" name="city" placeholder="City" onChange={handleChange} required />
      <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
      <button 
      type="submit"

    
      >Next</button>
    </form>
    </div>
    </div>
  );
}
