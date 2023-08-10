import { createReducer } from "@reduxjs/toolkit";

// local resources k help se save bhi krwa skte h.

export const cartReducer = createReducer(
  { cartItems: [], subTotal: 0, shipping: 0, tax: 0, total: 0 },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.id === item.id);

      isItemExist
        ? state.cartItems.forEach((i) => {
            if (i.id === item.id) i.quantity += 1;
          })
        : state.cartItems.push(item);
    },

    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);

      if (item.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity -= 1;
        });
      }
    },

    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },

    calculatePrice: (state) => {
      let sum = 0;
      state.cartItems.forEach((i)=> (sum += i.price * i.quantity));
      state.subTotal = sum;
      if(sum>0) state.shipping = sum > 1000 ? 0: 20;    
      state.tax = (sum*(0.18)).toFixed();
      state.total = sum + state.shipping + +state.tax;
    },
  }
);
