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
    // ADD_TO_CART: (state, action) => {
    //   return {
    //     ...state,
    //     inStock: state.products.filter(product => {
    //       if (product.name === action.payload.name) {
    //         product.inStock--;
    //       }
    //     })
    //   }
    // },
    // REMOVE_FROM_CART: (state, action) => {
    //   return {
    //     ...state,
    //     inStock: state.products.filter(product => {
    //       if (product.name === action.payload.name) {
    //         product.inStock++;
    //       }
    //     })
    //   }
    // },
    RESET: (state, action) => {
      return state;
    }
  }
});

const { GET_PRODUCTS, CHANGE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, RESET } = productsSlice.actions;
export default productsSlice.reducer;

// let initialState = {
//   products: [],

// };

// export const setProducts = createAction(GET_PRODUCTS);

// const productsReducer = createReducer(
//   initialState,
//   {

//     [GET_PRODUCTS]: (state, action) => {
//       return {
//         ...state,
//         products: action.payload,
//       }
//     },
    
//     [CHANGE_PRODUCTS]: (state, action) => {
//       return {
//         ...state,
//         products: state.products.filter(product => product.category === action.payload.name)
//       }
//     }, 

//     [ADD_TO_CART]: (state, action) => {
//       return {
//         ...state,
//         inStock: state.products.filter(product => {
//           if (product.name === action.payload.name) {
//             product.inStock--;
//           }
//         })
//       }
//     },

//     [REMOVE_FROM_CART]: (state, action) => {
//       return {
//         ...state,
//         inStock: state.products.filter(product => {
//           if (product.name === action.payload.name) {
//             product.inStock++;
//           }
//         })
//       }
//     },

//     [RESET]: (state, action) => {
//       return state;
//     }

//   });


// export default productsReducer;

// let initialState = {
//   products: [
//     { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
//     { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
//     { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
//     { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
//     { name: 'Apples', category: 'food', price: .99, inStock: 500 },
//     { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
//     { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
//   ]
// };

// function productsReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'CHANGE_PRODUCTS':
//       return {
//         ...state,
//         products: initialState.products.filter(product => product.category === action.payload.name)
//       }

//     case 'ADD_TO_CART':
//       return {
//         ...state,
//         inStock: state.products.filter(product => {
//           if (product.name === action.payload.name) {
//             product.inStock = product.inStock - 1;
//           }
//         })
//       }

//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         inStock: state.products.filter(product => {
//           if (product.name === action.payload.name) {
//             product.inStock = product.inStock + 1;
//           }
//         })
//       }
      
//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// }


