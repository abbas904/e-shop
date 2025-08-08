import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify";

const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
 addToCart(state, action) {
  const newItem = action.payload;
  const existingItem = state.products.find(item => item.id === newItem.id);

  if (existingItem) {
    existingItem.quantity += newItem.quantity || 1;
    existingItem.totalPrice += newItem.price * (newItem.quantity || 1);
    state.totalPrice += newItem.price * (newItem.quantity || 1);
    state.totalQuantity += newItem.quantity || 1;
  } else {
    state.products.push({
      id: newItem.id,
      name: newItem.name,
      image: newItem.image,
      price: newItem.price,
      quantity: newItem.quantity || 1,
      totalPrice: newItem.price * (newItem.quantity || 1),
    });
    state.totalPrice += newItem.price * (newItem.quantity || 1);
    state.totalQuantity += newItem.quantity || 1;
  }
},
    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find(item => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter(item => item.id !== id);
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find(item => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalPrice += findItem.price;
        state.totalQuantity++;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find(item => item.id === id);
      if (findItem && findItem.quantity > 1) {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totalPrice -= findItem.price;
        state.totalQuantity--;
      }
    },
    clearCart(state) {
      state.products = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    }
  }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
