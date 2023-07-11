import axios from "axios";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { CHANGE_PRODUCTS, GET_CATEGORIES, RESET } from './constants';

export const setCategories = createAction(GET_CATEGORIES);

let initialState = {
  categories: [],
  activeCategory: '',
};


const categoriesReducer = createReducer(
  initialState,
  {
    [GET_CATEGORIES]: (state,action) => {
      return{
        ...state,
        categories: action.payload
      }

    },
    [CHANGE_PRODUCTS]: (state, action) => {
      return {
        ...state,
        activeCategory: action.payload, //send all the payload action to use it
      }
    },
    [RESET]: (state, action) => {
      return {
        state
      }
    }
  }
)

//function to handle the async for our data getter
export const getCategories = () => async(dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  console.log('initial categories from API call', response.data.results);
  dispatch(setCategories(response.data.results));
}

export default categoriesReducer;

// let initialState = {
//   categories: [
//     { name: 'electronics', displayName: 'Electronics' },
//     { name: 'food', displayName: 'Food' },
//     { name: 'clothing', displayName: 'Clothing' },
//   ],
//   activeCategory: '',
// };

// function categoriesReducer(state = initialState, action) {
//   switch(action.type){
//     case 'CHANGE_PRODUCTS':
//       return {
//         ...state,
//         activeCategory: action.payload, //send all the payload action to use it
//     }
//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// }


