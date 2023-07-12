import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { When } from 'react-if';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../../store/cart'; //!!trying to change import with createSlice, think this is broken?
import { getProducts, removeStock } from '../../store/products';
import { useEffect } from 'react';
import '../../../App.css'



function Products() {
  
  let { products } = useSelector((state) => state.products);
  // products = [products];
  console.log('THESE ARE MY PRODUCTS', products);
  const { activeCategory } = useSelector((state) => state.categories);
  console.log('activeCategory on the Products page', activeCategory);

const useDispatcher = (product) => {
  dispatch(ADD_TO_CART(product)); // add to cart
  dispatch(removeStock(product)); // removes stock from in stock value after adding to cart
}

  useEffect(() => {
    dispatch(getProducts(activeCategory.name));
  }, [activeCategory]);


  const dispatch = useDispatch();

  return (
    <When condition={activeCategory}>
      <Grid container spacing={2} width="80%" margin="auto">
        {/* !! I think this products is undefined so page is breaking */}
        {products.map((product, index) => (
          <>
            {
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Card key={`products-${index}`} sx={{ maxWidth: 345 }}>
                  <CardMedia id="img-container"
                    sx={{ height: 140 }}
                    image={`https://source.unsplash.com/random/?${product.name}`}
                    title="random image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Name: {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      In-Stock: {product.inStock}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <When condition={product.inStock}>
                      <Button size="small" onClick={() => useDispatcher(product)}>Add to Cart</Button>
                    </When>
                    <Button size="small">View Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            }
          </>
        ))}
      </Grid>
    </When>
  )
}

export default Products;