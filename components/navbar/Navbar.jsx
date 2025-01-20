import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Box, Button, Typography } from '@mui/material';
import { Menu as MenuIcon, Phone as PhoneIcon, Message as MessageIcon, Calculate as CalculateIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import theme from '../../theme';
import Logo from '../Logo';
import FullScreenDropdown from './SubMenuNavbar'; // Import the updated SubMenuNavbar
import DrawerMenu from './DrawerMenu'; // Import the DrawerMenu

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control the Drawer

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > scrollPosition && currentScrollPos > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const toggleDrawer = (open) => {
    setDrawerOpen(open); // Toggle drawer open/close
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        minHeight: '100px',
        boxShadow: 0,
        top: showNavbar ? '0' : '-100px',
        transition: 'top 0.3s',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: '100px',
          padding: '0 24px',
        }}
      >
        <Logo />

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', flexGrow: 1 }}>
          <Button
            color="inherit"
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              '&:hover': { color: theme.palette.link.hover },
              margin: '0 16px',
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: theme.palette.link.main }}>Strona Główna</Link>
          </Button>

          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <FullScreenDropdown />
          </Box>

          <Button
            color="inherit"
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              '&:hover': { color: theme.palette.link.hover },
              margin: '0 16px',
            }}
          >
            <Link to="/about" style={{ textDecoration: 'none', color: theme.palette.link.main }}>O nas</Link>
          </Button>

          <Button
            color="inherit"
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              '&:hover': { color: theme.palette.link.hover },
              margin: '0 16px',
            }}
          >
            <Link to="/blog" style={{ textDecoration: 'none', color: theme.palette.link.main }}>Blog</Link>
          </Button>

          <Button
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: 'white',
              backgroundColor: theme.palette.primary.main,
              '&:hover': { backgroundColor: theme.palette.primary.dark },
              marginLeft: '16px',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
            }}
            startIcon={<CalculateIcon />}
          >
            <Link to="/pricing" style={{ textDecoration: 'none', color: 'white' }}>Wycena</Link>
          </Button>
        </Box>

        {/* Mobile version - Hamburger Menu */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)} // Open drawer when clicked
            sx={{ fontSize: '30px' }}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="call"
            component="a"
            href="tel:+123456789"
            sx={{ marginLeft: '10px', fontSize: '30px' }}
          >
            <PhoneIcon />
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="sms"
            component="a"
            href="sms:+123456789"
            sx={{ marginLeft: '10px', fontSize: '30px' }}
          >
            <MessageIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer Component */}
      <DrawerMenu open={drawerOpen} toggleDrawer={() => toggleDrawer(false)} />
    </AppBar>
  );
};

export default Navbar;
