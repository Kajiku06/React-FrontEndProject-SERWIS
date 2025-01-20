import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import videoSource from '../../assets/backgorund/video.mp4';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}));

const VideoBackground = styled('video')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  objectFit: 'cover',
  zIndex: -2,
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  zIndex: -1,
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)', 
  fontSize: '3rem', // Domyślny rozmiar tekstu
  fontWeight: 'bold',
  zIndex: 1,
  opacity: 1,
  whiteSpace: 'nowrap',
  display: 'inline-block', 
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem', 
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem', 
  },
}));

const WelcomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <BackgroundContainer>
      <VideoBackground autoPlay loop muted playsInline>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay />
      <StyledTypography
        variant="h3"
        component="h1"
        gutterBottom
        data-aos="fade-up" 
      >
        {'Technologia, która działa dla Ciebie'.split('').map((letter, index) => (
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
      </StyledTypography>
    </BackgroundContainer>
  );
};

export default WelcomeSection;
