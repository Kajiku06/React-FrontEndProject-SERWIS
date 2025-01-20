import React, { useEffect } from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'; 
import { ArrowUpward } from '@mui/icons-material'; 
import Logo from '../Logo';

// AOS import (upewnij się, że masz zainstalowane AOS)
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true, // animacje tylko raz
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        height: 'auto',
        backgroundColor: theme.palette.background.primary,
        color: theme.palette.text.primary,
        padding: theme.spacing(4, 2, 1, 2),
        position: 'relative',
        paddingBottom: '100px',
      }}
    >
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={4} data-aos="fade-up">
          <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
            Kontakt
          </Typography>
          <Typography variant="body2">
            Telefon: 1231123123<br />
            E-mail: faidaijaoij@soiefjopijsdefwopijwefepi.pl
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'left' }} data-aos="fade-up" data-aos-delay="200">
          <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
            Linki
          </Typography>
          <Box>
            <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Strona Główna
            </Link>
            <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1 }}>
              O nas
            </Link>
            <Link href="/contact" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Kontakt
            </Link>
            <Link href="/cooperation" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Współprace
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'right' }} data-aos="fade-up" data-aos-delay="400">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              flexDirection: { xs: 'column', sm: 'row' }, // Responsywność: na telefonie ikony w kolumnie, na większym ekranie w rzędzie
              alignItems: 'center',
            }}
          >
            <Link href="https://facebook.com" color="inherit" sx={{ display: 'inline-block' }} className="icon-bounce">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </Link>
            <Link href="https://twitter.com" color="inherit" sx={{ display: 'inline-block' }} className="icon-bounce">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </Link>
            <Link href="https://instagram.com" color="inherit" sx={{ display: 'inline-block' }} className="icon-bounce">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Link>
            <Link href="https://youtube.com" color="inherit" sx={{ display: 'inline-block' }} className="icon-bounce">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </Link>
            <Link href="https://github.com/Kajiku06" color="inherit" sx={{ display: 'inline-block' }} className="icon-bounce">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
            <Link href="https://discord.com" color="inherit" sx={{ display: 'inline-block' }} className="icon-bounce">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }} data-aos="fade-up" data-aos-delay="600">
        <Logo />
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          &copy; {new Date().getFullYear()} Strona wykonan przez <Link href='/about' style={{ color: 'inherit' }}>Kazimierz Kiper</Link>. Wszelkie prawa zastrzeżone.
        </Typography>
      </Box>

      {/* Strzałka do góry */}
      <IconButton 
        onClick={scrollToTop} 
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
      >
        <ArrowUpward />
      </IconButton>
    </Box>
  );
};

export default Footer;
