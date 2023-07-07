//TODO: need some type of workable shopping cart on far right later
import { useSelector } from 'react-redux';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
function Header() {

const { cart } = useSelector((state) => state.cart);

  return (
    <AppBar
      position='static'
      sx={{ backgroundColor: 'white' }}
    >
      <Container>
        <Toolbar
          disableGutters>
          <Typography
            variant='h4'
            sx={{ color: 'black' }}>
            We Only Accept Doll Hairs Store
          </Typography>
          <Button>
            Cart ({cart.length})
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;