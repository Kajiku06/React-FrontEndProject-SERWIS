import React from 'react';
import { Box, Link } from '@mui/material'; 
import logo from '../assets/logo.webp'; 

const Logo = () => {
  return (
    <Link href="/" sx={{ display: 'flex', alignItems: 'center' }}>
    <Box 
      sx={{ 
        position: 'flex', 
        bottom: '16px',  
        left: '16px',    
        padding: '8px',  
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 20%, rgba(0, 0, 0, 0.7) 100%)', 
        borderRadius: '50%',  
        width: '60px', 
        height: '60px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',  
      }}
    >
     
        <Box 
          sx={{
            position: 'relative',
            display: 'inline-block',
            borderRadius: '50%',  
            overflow: 'hidden',  
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src={logo} 
            alt="Logo"
            style={{
              width: '100%',    
              height: '100%',
              objectFit: 'cover', 
            }}
          />
        </Box>
        </Box>
      </Link>
    
  );
};

export default Logo;
