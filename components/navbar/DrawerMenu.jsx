import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Box, ListItemIcon } from '@mui/material';
import { Close as CloseIcon, Phone as PhoneIcon, Message as MessageIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import theme from '../../theme';

const DrawerMenu = ({ open, toggleDrawer }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer}
      sx={{
        '& .MuiDrawer-paper': {
          width: 250,
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Półprzezroczyste tło
          color: theme.palette.link.main,
        },
      }}
    >
      {/* Przycisk zamknięcia menu (ikona krzyżyka) */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
        <IconButton
          color="inherit"
          aria-label="close"
          onClick={toggleDrawer}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {/* Strona główna */}
        <ListItem button onClick={toggleDrawer}>
          <ListItemText>
            <Link to="/" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
              Strona Główna
            </Link>
          </ListItemText>
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* O nas */}
        <ListItem button onClick={toggleDrawer}>
          <ListItemText>
            <Link to="/about" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
              O nas
            </Link>
          </ListItemText>
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* Blog */}
        <ListItem button onClick={toggleDrawer}>
          <ListItemText>
            <Link to="/blog" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
              Blog
            </Link>
          </ListItemText>
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* Oferta */}
        <ListItem button onClick={toggleDrawer}>
          <ListItemText>
            <Link to="/offer" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
              Oferta
            </Link>
          </ListItemText>
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* Systemy Inteligentne - rozwijane */}
        <ListItem button onClick={toggleDrawer}>
          <ListItemText>
            <Link to="/systems" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
              Systemy Inteligentne
            </Link>
          </ListItemText>
        </ListItem>
        <List component="div" disablePadding>
          <ListItem button sx={{ pl: 4 }} component={Link} to="/systems/home">
            <ListItemText primary="Do domu" />
          </ListItem>
          <ListItem button sx={{ pl: 4 }} component={Link} to="/systems/apartment">
            <ListItemText primary="Do mieszkania" />
          </ListItem>
          <ListItem button sx={{ pl: 4 }} component={Link} to="/systems/office">
            <ListItemText primary="Do biura" />
          </ListItem>
        </List>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* Kontakt */}
        <ListItem button onClick={toggleDrawer}>
          <ListItemText>
            <Link to="/contact" style={{ textDecoration: 'none', color: theme.palette.link.main }}>
              Kontakt
            </Link>
          </ListItemText>
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* Opcje Zadzwoń / Wyślij SMS */}
        <ListItem button component="a" href="tel:+123456789">
          <ListItemIcon>
            <PhoneIcon sx={{ color: theme.palette.link.main }} />
          </ListItemIcon>
          <ListItemText primary="Zadzwoń" />
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
        
        <ListItem button component="a" href="sms:+123456789">
          <ListItemIcon>
            <MessageIcon sx={{ color: theme.palette.link.main }} />
          </ListItemIcon>
          <ListItemText primary="Wyślij SMS" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
