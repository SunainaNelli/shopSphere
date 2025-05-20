import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./checkout.css";

export default function Checkout() {
  

  return (
    <div className="checkout-wrapper">
      < Outlet />
    </div>
  );
}
