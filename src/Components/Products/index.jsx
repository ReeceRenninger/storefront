
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//TODO: These will need to be cards that show the product image, name, and have interaction buttons for adding to cart and viewing details

function Products(){
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia id="img-container"
      sx={{ height: 140 }}
      image="https://source.unsplash.com/random/?electronics"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Space Wizard Stuff
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Look at all this cool stuff you can buy!
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Add to Cart</Button>
      <Button size="small">View Details</Button>
    </CardActions>
  </Card>
  )
}

export default Products;