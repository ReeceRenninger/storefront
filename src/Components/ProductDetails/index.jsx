import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ActiveCategory from "../ActiveCategory";

// product card imports
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function ProductDetails() {

  const { products } = useSelector((state) => state.products);
  const { id } = useParams();
  console.log('state.products: ', products);
  const product = products.find((product) => product._id === id);

  return (
    
          <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={`https://source.unsplash.com/random/?${product.name}`}
            srcSet={`https://source.unsplash.com/random/?${product.name}`}
            loading={product.name}
            alt={product.name}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body3">{product.name}</Typography>
        <Link
          href="#product-card"
          fontWeight="xl"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
        >
          Greatest {product.category} to find on the internet!
        </Link>

        <Typography
          fontSize="xl"
          fontWeight="xl"
          sx={{ mt: 1 }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price!
            </Chip>
          }
        >
          {product.price} doll hairs
        </Typography>
        <Typography level="body2">
          (Only {product.inStock} left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
      
    
  )
}

export default ProductDetails;