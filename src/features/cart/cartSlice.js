// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Each item will have an id, title, price, and quantity
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1; // Increase quantity if item already exists
      } else {
        state.items.push({ id, title, price, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].quantity > 1) {
          state.items[existingItemIndex].quantity -= 1; // Decrease quantity if item has more than 1
        } else {
          state.items.splice(existingItemIndex, 1); // Remove item if it has only 1
        }
      }
    },
    clearCart: state => {
      state.items = []; // Clear the cart
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

