import { configureStore } from "@reduxjs/toolkit";  
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice"; // Import the auth slice
import productReducer from "../features/products/productSlice"; // Import the product slice
import checkoutReducer from "../features/checkout/checkoutSlice"; // Import the checkout slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    products: productReducer, 
    checkout: checkoutReducer,// Add the product slice to the store
  },
});

