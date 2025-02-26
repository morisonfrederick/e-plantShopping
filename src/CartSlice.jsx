import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      let itemExist = state.items.find((item) => {
        return item.name == name;
      });

      if (itemExist) {
        itemExist.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter((item) => {
        item.name != name;
      });
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      let itemExist = state.items.find((item) => {
        return item.name == name;
      });

      if (itemExist && quantity > 0) {
        itemExist.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
