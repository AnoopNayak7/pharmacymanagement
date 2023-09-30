import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  dosage: any;
  _id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  products: CartItem[];
  isCartOpen: boolean;
}

const initialState: CartState = {
  products: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      console.log("Redux state --> Product::", action.payload._id)
      const { _id } = action.payload;

      const existingItemIndex = state.products.findIndex((item) => item._id === _id);

      console.log('existingItemIndex', existingItemIndex)

      if (existingItemIndex !== -1) {
        state.products[existingItemIndex].quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((item) => item._id !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.products.find((item) => item._id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.products.find((item) => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  openCart,
  closeCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
