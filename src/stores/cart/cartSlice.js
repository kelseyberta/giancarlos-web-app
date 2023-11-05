import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const { _id } = action.payload;
        const productIndex = state.products.findIndex(product => product._id === _id);
  
        if (productIndex !== -1) {
          state.products[productIndex] = {
            ...state.products[productIndex],
            amount: state.products[productIndex].amount + 1
          };
        } else {
          state.products = [...state.products, { ...action.payload, amount: 1 }];
        }
      },
    clearCart: (state) => {
      state.products = [];
    },
    incrementProductAmount: (state, action) => {
        const { _id } = action.payload;
        const productIndex = state.products.findIndex(product => product._id === _id);
        console.log('Action payload:', action.payload);
console.log('State before:', state.products);
        if (productIndex !== -1) {
          state.products[productIndex] = {
            ...state.products[productIndex],
            amount: state.products[productIndex].amount + 1
          };
        }
        console.log('State after:', state.products);

    },
    
    decrementProductAmount: (state, action) => {
        const { _id } = action.payload;
        const productIndex = state.products.findIndex(product => product._id === _id);
        console.log('Action payload:', action.payload);
console.log('State before:', state.products);
        if (productIndex !== -1 && state.products[productIndex].amount > 0) {
          state.products[productIndex] = {
            ...state.products[productIndex],
            amount: state.products[productIndex].amount - 1
          };
        }
        console.log('State after:', state.products);

    },
    
    removeFromCart: (state, action) => {
      const { _id } = action.payload;
      state.products = state.products.filter(product => product._id !== _id);
    },
  },
});

export const cartProducts = (state) => state.cart.products;

export const { addToCart, clearCart, incrementProductAmount, decrementProductAmount, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
