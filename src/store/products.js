import { createSlice } from "@reduxjs/toolkit";

import axios from 'axios';


export const getProducts = (activeCategory) => async(dispatch, getState) => {
  let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products?category=${activeCategory}`);
  console.log('initial product data from API call', response.data.results);
  dispatch(GET_PRODUCTS(response.data.results));
}

export const removeStock = (product) => async(dispatch) => {
  product = {...product, inStock: product.inStock - 1};
  const response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  dispatch(getProducts(product.category)); // response.data.results instead?
}

export const addStock = (product) => async(dispatch) => {
  product = {...product, inStock: product.inStock};
  const response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  dispatch(getProducts(product.category)); // response.data.results instead?
}

const initialState = {
  products: [],
};

const productsSlice = createSlice({ 
  name: 'products',
  initialState,
  reducers: {
    GET_PRODUCTS: (state, action) => {
      return {
        ...state,
        products: action.payload,
      }
    },
    CHANGE_PRODUCTS: (state, action) => {
      return {
        ...state,
        products: state.products.filter(product => product.category === action.payload.name)
      }
    },
    RESET: (state, action) => {
      return state;
    }
  }
});

const { GET_PRODUCTS, CHANGE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, RESET } = productsSlice.actions;
export default productsSlice.reducer;

