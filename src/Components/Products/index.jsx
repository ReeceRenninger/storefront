
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {  useSelector } from 'react-redux';
// import { changeProducts } from '../../store/products';

//TODO: These will need to be cards that show the product image, name, and have interaction buttons for adding to cart and viewing details

function Products() {

  const { products } = useSelector((state) => state.products);
  console.log('products', products);

  return (
    products.map((product, index) => (
      <>
        {
          <Card key={`products-${index}`} sx={{ maxWidth: 345 }}>
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
                Price: {product.price}
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
        }
      </>
    ))
  )
}

export default Products;