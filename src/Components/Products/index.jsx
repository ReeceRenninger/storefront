import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
// import { When } from 'react-if';
import { useSelector } from 'react-redux';

import '../../../App.css'

function Products() {

  const { activeCategory, products } = useSelector((state) => state.products);
  console.log('products', products);

  return (
    products.map((product, index) => (
      <>
          <Grid className='productCards' spacing={3}  key={`product-${index}`}>
        {
        //  <When condition={activeCategory}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
              <Card  variant="outlined" sx={{ maxWidth: 345 }}>
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
                  <Button size="small">Add to Cart</Button>
                  <Button size="small">View Details</Button>
                </CardActions>
              </Card >
            </Grid>
        // </When>
      }
      </Grid>
        </>
    ))
  )
}

export default Products;