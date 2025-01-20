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
          width: '100%',  // Ustawiamy szerokość na 100%
          backgroundColor: 'rgba(0, 0, 0, 0.85)',  // Ciemne półprzezroczyste tło
          color: theme.palette.text.primary,  // Kolor tekstu dla elementów
          padding: '16px',  // Dodałem padding dla estetyki
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* Przycisk zamknięcia menu (ikona krzyżyka) */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '16px' }}>
        <IconButton
          color="inherit"
          aria-label="close"
          onClick={toggleDrawer}
          sx={{ fontSize: '30px', color: theme.palette.text.primary }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Lista linków */}
      <List sx={{ width: '100%' }}>
        {/* Strona główna */}
        <ListItem button onClick={toggleDrawer}>
          <ListItemText>
            <Link 
              to="/" 
              style={{ 
                textDecoration: 'none', 
                color: theme.palette.text.primary, 
                transition: 'color 0.3s ease-in-out',
                display: 'inline-block'
              }}
              onClick={toggleDrawer}
            >
              Strona Główna
            </Link>
          </ListItemText>
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* O nas */}
        <ListItem button onClick={toggleDrawer}>
          <ListItemText>
            <Link 
              to="/about" 
              style={{ 
                textDecoration: 'none', 
                color: theme.palette.text.primary, 
                transition: 'color 0.3s ease-in-out',
                display: 'inline-block'
              }}
              onClick={toggleDrawer}
            >
              O nas
            </Link>
          </ListItemText>
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* Blog */}
        <ListItem button onClick={toggleDrawer}>
          <ListItemText>
            <Link 
              to="/blog" 
              style={{ 
                textDecoration: 'none', 
                color: theme.palette.text.primary, 
                transition: 'color 0.3s ease-in-out',
                display: 'inline-block'
              }}
              onClick={toggleDrawer}
            >
              Blog
            </Link>
          </ListItemText>
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* Oferta */}
        <ListItem button onClick={toggleDrawer}>
          <ListItemText>
            <Link 
              to="/offer" 
              style={{ 
                textDecoration: 'none', 
                color: theme.palette.text.primary, 
                transition: 'color 0.3s ease-in-out',
                display: 'inline-block'
              }}
              onClick={toggleDrawer}
            >
              Oferta
            </Link>
          </ListItemText>
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* Systemy Inteligentne - rozwijane */}
        <ListItem button onClick={toggleDrawer}>
          <ListItemText>
            <Link 
              to="/systems" 
              style={{ 
                textDecoration: 'none', 
                color: theme.palette.text.primary, 
                transition: 'color 0.3s ease-in-out',
                display: 'inline-block'
              }}
              onClick={toggleDrawer}
            >
              Systemy Inteligentne
            </Link>
          </ListItemText>
        </ListItem>
        <List component="div" disablePadding>
          <ListItem button sx={{ pl: 4 }} component={Link} to="/systems/home" style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
            <ListItemText primary="Do domu" />
          </ListItem>
          <ListItem button sx={{ pl: 4 }} component={Link} to="/systems/apartment" style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
            <ListItemText primary="Do mieszkania" />
          </ListItem>
          <ListItem button sx={{ pl: 4 }} component={Link} to="/systems/office" style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
            <ListItemText primary="Do biura" />
          </ListItem>
        </List>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* Kontakt */}
        <ListItem button onClick={toggleDrawer}>
          <ListItemText>
            <Link 
              to="/contact" 
              style={{ 
                textDecoration: 'none', 
                color: theme.palette.text.primary, 
                transition: 'color 0.3s ease-in-out',
                display: 'inline-block'
              }}
              onClick={toggleDrawer}
            >
              Kontakt
            </Link>
          </ListItemText>
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        {/* Opcje Zadzwoń / Wyślij SMS */}
        <ListItem button component="a" href="tel:+123456789" onClick={toggleDrawer}>
          <ListItemIcon>
            <PhoneIcon sx={{ color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText primary="Zadzwoń" />
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
        
        <ListItem button component="a" href="sms:+123456789" onClick={toggleDrawer}>
          <ListItemIcon>
            <MessageIcon sx={{ color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText primary="Wyślij SMS" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
