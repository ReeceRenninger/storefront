//TODO: need some type of workable shopping cart on far right later

import { AppBar, Container, Toolbar, Typography } from '@mui/material';
function Header() {
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
          {/* <Typography
            variant='h6'
            sx={{ color: 'black' }}>
            Cart
          </Typography> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;