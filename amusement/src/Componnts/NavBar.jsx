import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    toolBarStyle: {
        display: 'flex',
        justifyContent:'space-between',
        background: 'linear-gradient(to right, #23074d, #cc5333)',
        // background: 'linear-gradient(to right, #16222a, #3a6073)',
        boxShadow: 'none'
  },
    containerStyle: {
        background: 'linear-gradient(to right, #23074d, #cc5333)',
        // background: 'linear-gradient(to right, #16222a, #3a6073)',
        padding: 0,
        boxShadow: 'none'
    },
    styledLink : {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            color: 'white'
        }
    }
});

const pages = [
  {
    text: 'HOME',
    path: '/'
  },
  {
    text: 'ABOUT',
    path: '/about'
  },
  {
    text: 'CONTACT',
    path: '/contact'
  },
  {
    text: 'QA',
    path: '/qa'
  }
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" className={classes.containerStyle}>
        <Toolbar className={classes.toolBarStyle}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            AMUSEMENT PARK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {
                pages.map( (page) => {
                  return(
                    <MenuItem key={page.text} onClick={handleCloseNavMenu} >
                      <Link to={page.path} >{page.text}</Link>
                    </MenuItem>
                  )
                })
              }
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            AMUSEMENT PARK
          </Typography> 
          <Box className='ms-5' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end' }}>
            {pages.map((page) => (
                <Button>
              <Link
                key={page.text}
                to={page.path}
                className={classes.styledLink}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'red', display: 'block' }}
              >
                {page.text}
              </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;