import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { When } from 'react-if';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions';
import '../../../App.css'

function Products() {

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { activeCategory } = useSelector((state) => state.categories);
  console.log('products', products);

  return (
    <When condition={activeCategory}>
      {products.map((product, index) => (
        <>
          <Grid className='productCards' spacing={3} key={`product-${index}`}>
            {
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Card variant="outlined" sx={{ maxWidth: 345 }}>
                  <CardMedia id="img-container"
                    sx={{ height: 140 }}
                    image={`https://source.unsplash.com/random/?${product.name}}`}
                    title="random image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Name: {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: {product.price} doll hairs
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      In-Stock: {product.inStock}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <When condition={product.inStock > 0}>
                    <Button onClick={() => dispatch(addToCart(product))} size="small">Add to Cart</Button>
                    </When>
                    <Button size="small">View Details</Button>
                  </CardActions>
                </Card >
              </Grid>
            }
          </Grid>
        </>
      ))}
    </When>
  )
}

export default Products;