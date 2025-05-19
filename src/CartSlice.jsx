import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );

      if (existingIndex >= 0) {
        // If exists, increase quantity (if you want to track quantity)
        state.items[existingIndex].quantity += 1;
      } else {
        // If not exists, add item with quantity = 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
