import { When } from "react-if";
import { useSelector } from "react-redux";

// all these imports for credit card form
import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Footer from "../Footer";

function ShoppingCart() {
  const { cart } = useSelector((state) => state.cart);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price
    })
    return total;
  }

  return (
    <>
    <When condition={cart.length > 0}>
      <div className="shoppingCart">
        <ul>
          <h2>Order Summary</h2>
          {
            cart.map((product, index) => (
              <li key={`shoppingCart-${index}`} className="item" >
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </li>
            ))
          }
          <li key={`shoppingcart-total`} className="item" >
            <h2>Total</h2>
            <h2>${calculateTotal()}</h2>
          </li>
        </ul>
      </div>
      <Card
        variant="outlined"
        sx={{
          maxHeight: 'max-content',
          maxWidth: '100%',
          mx: 'auto',
          // this is how it can be resizable
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <Typography level="h2" fontSize="xl" startDecorator={<InfoOutlined />}>
          THIS IS A FAKE CC FORM DO NOT ENTER ANY REAL INFORMATION!
        </Typography>
        <Divider inset="none" />
        <CardContent
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
            gap: 1.5,
          }}
        >
          <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>Card number</FormLabel>
            <Input endDecorator={<CreditCardIcon />} />
          </FormControl>
          <FormControl>
            <FormLabel>Expiry date</FormLabel>
            <Input endDecorator={<CreditCardIcon />} />
          </FormControl>
          <FormControl>
            <FormLabel>CVC/CVV</FormLabel>
            <Input endDecorator={<InfoOutlined />} />
          </FormControl>
          <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>Card holder name</FormLabel>
            <Input placeholder="Enter cardholder's full name" />
          </FormControl>
          <Checkbox label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
          <CardActions sx={{ gridColumn: '1/-1' }}>
            <Button variant="solid" color="primary">
              Add card
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <Footer />
    </When>
    <h1>CART IS EMPTY!</h1>
    </>
  )
}

export default ShoppingCart;