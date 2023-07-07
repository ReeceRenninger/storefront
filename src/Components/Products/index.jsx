
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import '../../../App.css'

function Products() {

  const { products } = useSelector((state) => state.products);
  console.log('products', products);

  return (
            products.map((product, index) => (
    <>
        {
          <Grid className='productCards' item xs={3} sm={4} md={4} key={`product-${index}`}>
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
                    Price: {product.price} dolhares
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
        }
      </>
    ))
  )
}

export default Products;