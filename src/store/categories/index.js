let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: '',
};

function categoriesReducer(state = initialState, action) {
  switch(action.type){
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        categories: state.categories.map(category => {
          if(category.name === action.payload.name){
            return {
              name: category.name,
              displayName: category.displayName,
              activeCategory: category.name, // TODO: check if this works
            }
          }
          return category;
      }),
    }
    default: //!! IS THIS NEEDED?
      return state;
  }
}

export const changeCategory = (category) => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category,
  }
}

export default categoriesReducer;