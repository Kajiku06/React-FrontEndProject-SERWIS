import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Box, Button, Menu, MenuItem, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Phone as PhoneIcon, Message as MessageIcon, Calculate as CalculateIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import theme from '../../theme';
import Logo from '../Logo';
import DrawerMenu from './DrawerMenu'

const Navbar = () => {
  const [open, setOpen] = useState(false); 
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0); 

  const toggleDrawer = () => {
    setOpen(!open);
  };

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

  const [offerAnchorEl, setOfferAnchorEl] = useState(null);
  const handleOfferClick = (event) => {
    setOfferAnchorEl(event.currentTarget);
  };
  const handleOfferClose = () => {
    setOfferAnchorEl(null);
  };

  const [systemsAnchorEl, setSystemsAnchorEl] = useState(null);
  const handleSystemsClick = (event) => {
    setSystemsAnchorEl(event.currentTarget);
  };
  const handleSystemsClose = () => {
    setSystemsAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed" 
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        minHeight: '80px',
        boxShadow: 0,
        top: showNavbar ? '0' : '-80px', 
        transition: 'top 0.3s', 
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: '80px',
        }}
      >
        <Logo />

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', flexGrow: 1 }}>
          <Button color="inherit" sx={{ '&:hover': { color: theme.palette.link.hover } }}>
            <Link to="/" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
              Strona Główna
            </Link>
          </Button>
          
          {/* Dropdown menu for "Systemy Inteligentne" */}
          <Button
            onClick={handleSystemsClick}
            sx={{ color: theme.palette.link.main, '&:hover': { color: theme.palette.link.main }}}
          >
            Systemy Inteligentne
          </Button>
          <Menu
            anchorEl={systemsAnchorEl}
            open={Boolean(systemsAnchorEl)}
            onClose={handleSystemsClose}
          >
            <MenuItem onClick={handleSystemsClose}>
              <Link to="/systems/home" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
                Do domu
              </Link>
            </MenuItem>
            <MenuItem onClick={handleSystemsClose}>
              <Link to="/systems/apartment" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
                Do mieszkania
              </Link>
            </MenuItem>
            <MenuItem onClick={handleSystemsClose}>
              <Link to="/systems/office" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
                Do biura
              </Link>
            </MenuItem>
          </Menu>

          {/* Dropdown menu for "Oferta" */}
          <Button
            onClick={handleOfferClick}
            sx={{ color: theme.palette.link.main,'&:hover': { color: theme.palette.link.main }}}
          >
            Oferta
          </Button>
          <Menu
            anchorEl={offerAnchorEl}
            open={Boolean(offerAnchorEl)}
            onClose={handleOfferClose}
          >
            <MenuItem onClick={handleOfferClose}>
              <Link to="/offer/suboffer1" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
                Oferta 1
              </Link>
            </MenuItem>
            <MenuItem onClick={handleOfferClose}>
              <Link to="/offer/suboffer2" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
                Oferta 2
              </Link>
            </MenuItem>
            <MenuItem onClick={handleOfferClose}>
              <Link to="/offer/suboffer3" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
                Oferta 3
              </Link>
            </MenuItem>
          </Menu>

          <Button color="inherit" sx={{ '&:hover': { color: theme.palette.link.hover } }}>
            <Link to="/about" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
              O nas
            </Link>
          </Button>
          <Button color="inherit" sx={{ '&:hover': { color: theme.palette.link.hover } }}>
            <Link to="/blog" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
              Blog
            </Link>
          </Button>
          
          {/* Wycena button with calculator icon */}
          <Button
            sx={{
              color: 'white',
              backgroundColor: theme.palette.primary.main,
              '&:hover': { backgroundColor: theme.palette.primary.dark },
              marginLeft: '16px'
            }}
            startIcon={<CalculateIcon />}
          >
            <Link to="/pricing" style={{ textDecoration: 'none', color: 'white' }}>
              Wycena
            </Link>
          </Button>
        </Box>

        {/* Mobile drawer menu icon */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          {/* Phone and SMS icons on mobile */}
          <IconButton
            color="inherit"a
            aria-label="call"
            component="a"
            href="tel:+123456789"
            sx={{ marginLeft: '10px' }}
          >
            <PhoneIcon />
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="sms"
            component="a"
            href="sms:+123456789"
            sx={{ marginLeft: '10px' }}
          >
            <MessageIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer Menu */}
      <DrawerMenu open={open} toggleDrawer={toggleDrawer} />
    </AppBar>
  );
};

export default Navbar;
