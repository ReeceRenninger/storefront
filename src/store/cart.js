import { createReducer, createSlice } from "@reduxjs/toolkit";

let initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    ADD_TO_CART: (state, action) => {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    },
    REMOVE_FROM_CART: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter(product => product.name !== action.payload.name)
      }
    },
    RESET: (state) => {
      return state;
    }
  }
});
export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions;

export default cartSlice.reducer;

// const cartReducer = createReducer(
//   initialState,
//   {
//     [ADD_TO_CART]: (state,action) => {
//       return [...state.cart, action.payload];
//     },
//     [REMOVE_FROM_CART]: (state, action) => {
//       return {
//         ...state,
//         cart: state.cart.filter(product => product.name !== action.payload.name),
//       }
//     }
// });

// export default cartReducer;

// let initialState = {
//   cart: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         cart: [...state.cart, action.payload],
//       }
//     case 'REMOVE_FROM_CART':
//       return {
//       ...state,
//        cart: state.cart.filter(item => item.name !== action.payload.name),
//       }
//     default:
//       return state;
//   }
// }
