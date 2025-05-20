import js from "@eslint/js";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 shippingInfo: JSON.parse(localStorage.getItem('shippingInfo')) || null,
  paymentMethod: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
      localStorage.setItem("shippingInfo", JSON.stringify(action.payload));
    },
    clearShippingInfo: (state) => {
      state.shippingInfo = null;
      localStorage.removeItem("shippingInfo");
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    resetCheckout: (state) => {
      state.shippingInfo = null;
      state.paymentMethod = null;
    },
  },
});

export const { setShippingInfo, clearShippingInfo, setPaymentMethod, resetCheckout } = checkoutSlice.actions;

export default checkoutSlice.reducer;
