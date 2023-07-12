import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART } from '../../store/cart'; //trying to change import with createSlice
import { When } from 'react-if';
import { addStock } from '../../store/products';
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import '../../../App.css';
import './styles.scss'

const SimpleCart = () => {

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const removeDispatcher = (product) => {
    dispatch(REMOVE_FROM_CART(product));
    dispatch(addStock(product));
  }

  return (
    <>
      <When condition={cart.length > 0}>
        <div className="simple-cart">
          <ul>

            {
              cart.map((product, index) => (
                <li key={`simpleCart-${index}`} className="item">
                  {product.name}
                  <span
                    onClick={() => removeDispatcher(product)}
                    className="remove"
                  >
                    X
                  </span>
                </li>
              ))
            }
          </ul>
        </div>
      </When>
    </>
  );
};

export default SimpleCart;



