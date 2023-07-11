import { useDispatch, useSelector } from 'react-redux';
// import { changeProducts, reset }  from '../../store/actions';
// import { getProducts } from '../../store/products';
import { Button, ButtonGroup } from '@mui/material';
import { CHANGE_PRODUCTS, getCategories } from '../../store/categories';
import { useEffect } from 'react';

function Categories () {

  const { categories } = useSelector((state) => state.categories);
  console.log('categories', categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categoryHandler = (category) => {  
    dispatch(CHANGE_PRODUCTS(category));
  };

    return (
        <>
            <h1>Browse Our Categories</h1>
            <ButtonGroup variant="text" aria-label="text button group">
            {
              categories.map((category, index) => (
              
                <Button key={`categories-${index}`} className='links' onClick={() => categoryHandler(category)}>
                  {category.name} 
                </Button>
            
              ))
            }
            </ButtonGroup>
                <Button onClick={() => reset()}>
                  RESET
                </Button>
           
        </>
    )
}

export default Categories;