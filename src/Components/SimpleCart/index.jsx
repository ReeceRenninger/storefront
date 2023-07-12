import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Typography } from "@mui/material";
import { REMOVE_FROM_CART } from '../../store/cart'; //trying to change import with createSlice
import DeleteIcon from '@mui/icons-material/Delete';
import '../../../App.css';

const SimpleCart = () => {

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

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
                <IconButton>
                  <DeleteIcon fontSize="small" onClick={() => dispatch(REMOVE_FROM_CART(product))} />
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



