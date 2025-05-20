import { createSlice } from "@reduxjs/toolkit";


function getInitialCart() {
  const cart = localStorage.getItem("cart");
  const items = cart ? JSON.parse(cart) : [];

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return {
    items,
    totalQuantity,
    totalAmount
  };
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}   

const initialState = getInitialCart();


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      state.totalQuantity += item.quantity;
      state.totalAmount += item.price * item.quantity;
      saveCart(state.items);
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const item = state.items.find((i) => i.id === itemId);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        state.items = state.items.filter((i) => i.id !== itemId);
        saveCart(state.items);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      localStorage.removeItem("cart");
    },
    increaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
        saveCart(state.items);
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
        saveCart(state.items);
      }
    },
 },
});

export const { addToCart, removeFromCart, clearCart,  increaseQuantity,
  decreaseQuantity, } = cartSlice.actions;
export default cartSlice.reducer;
