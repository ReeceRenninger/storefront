import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import { removeFromCart } from '../../store/actions';
import '../../../App.css';

function SimpleCart() {

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart); //state.cart or just state?

  return (
    <>
    {
      cart.map((product, index) => (
        <Box className='addedItems' key={`cart-${index}`}>
          {product.name}
          <Button onClick={() => dispatch(removeFromCart(product))} >X</Button>

        </Box>
      ))

    }
    </>
  )


}

export default SimpleCart;