import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import '../../styles/SectionAnimation.css'
const OfferSection = () => {
  const theme = useTheme(); 

  return (
    <Box
      sx={{
        position: 'relative',
        height: '80vh', 
        backgroundColor: theme.palette.background.primary, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <Typography
        sx={{
          fontSize: '6rem',
          color: theme.palette.text.primary, 
          fontWeight: 'bold',
          zIndex: 1,
          opacity: 1,
          whiteSpace: 'nowrap',
          display: 'inline-block', 
        }}
      >
        {'Oferta'.split('').map((letter, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              opacity: 0,
              animation: `fadeIn 0.8s forwards ${index * 0.1}s`,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter} 
          </span>
        ))}
      </Typography>

      {/* Tło */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('https://your-image-url.com')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default OfferSection;
