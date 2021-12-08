import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import CheckOutCart from './CheckOutCart.jsx';

const white = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

export default function MenuAppBar({
  badge,
  carShop,
  dellToCard,
  editItemInCar,
}) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={white}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              onClick={toHome}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Padaria
            </Typography>
            {auth && (
              <div>
                <CheckOutCart
                  dellToCard={dellToCard}
                  badge={badge}
                  carShop={carShop}
                  editItemInCar={editItemInCar}
                />

                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem /* onClick= {handleClose}  */>
                    <input type="text" className="m-2"></input>
                  </MenuItem>
                  <MenuItem>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
