import axios from "axios";
import { createSlice, createAction, createReducer } from "@reduxjs/toolkit";


//function to handle the async for our data getter
export const getCategories = () => async(dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  console.log('initial categories from API call', response.data.results);
  dispatch(SET_CATEGORIES(response.data.results));
}


const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: '',
  },
  reducers: {
    SET_CATEGORIES: (state, action) => {
      return {...state, categories: action.payload}
    },
    CHANGE_CATEGORIES: (state, action) => {
      return {...state, activeCategory: action.payload}
    },
    RESET: (state, action) => {
      return {...state}
    }
  }
})

export const { SET_CATEGORIES, CHANGE_CATEGORIES, RESET } = categorySlice.actions;
export default categorySlice.reducer;

