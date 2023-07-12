import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART } from '../../store/cart'; //trying to change import with createSlice
import { addStock } from '../../store/products';
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import '../../../App.css';

const SimpleCart = () => {

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const removeDispatcher = (product) => {
    dispatch(REMOVE_FROM_CART(product));
    dispatch(addStock(product));
  }

  return (
    <>
        {
          cart.map((product, index) => {
            return (
              <Box
                className='cart-items'
                key={`cart-${index}`}
                sx={{
                  justifyContent: "space-between",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "80px",
                  margin: 'auto',
                }}
              >
                <Typography>{product.name}</Typography>
                <IconButton  onClick={() => removeDispatcher(product)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            )
          }
          )
        }
    
    </>
  );
};

export default SimpleCart;



