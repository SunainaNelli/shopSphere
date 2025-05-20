import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Fill this from mockdata for now
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    deleteProduct(state, action) {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    addProduct(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { setProducts, deleteProduct, addProduct } = productsSlice.actions;
export default productsSlice.reducer;
