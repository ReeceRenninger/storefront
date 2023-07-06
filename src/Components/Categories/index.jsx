import { useDispatch, useSelector } from 'react-redux';
import changeCategory from '../../store/categories';

//TODO: Set up navbar with routes to each category of food and electronics
//TODO: Have large Text that signifies the active category at center of page
function Categories () {

  const { categories } = useSelector((state) => state.categories);
  console.log('categories', categories);

  const dispatch = useDispatch();

  const categoryHandler = (category) => {  
    dispatch(changeCategory(category));
  };

    return (
        <>
            <h1>Browse Our Categories</h1>
            {
              categories.map((category, index) => (
                <article key={`category-${index}`}>
                  <h2 onClick={() => categoryHandler(category)}>{category.displayName}</h2>
                </article>
              ))
            }
            <p>NEED 2 LINKS FOR ELECTRONICS AND FOODS CATEGORY REFERENCE LAB IMAGE</p>
        </>
    )
}

export default Categories;