import React, { useEffect } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import theme from '../../theme';
import serwer from '../../assets/serwer.jpg';
import kodowanie from '../../assets/kodowanie.jpg';
import smarthome from '../../assets/smarthome.jpg';
import AOS from 'aos'; // Importujemy AOS
import 'aos/dist/aos.css'; // Importujemy style AOS

const offerItems = [
  {
    id: 1,
    title: "Montaż serwera do domu lub biura",
    client: "SERWERY",
    imageUrl: serwer,
    categories: ["FREENAS / TRUENAS", "UBUNTU SERVER", "GRAFIKA", "WEB DEVELOPMENT"]
  },
  {
    id: 2,
    title: "Tworzenie i rozwój aplikacji",
    client: "PROGRAMOWANIE",
    imageUrl: kodowanie,
    categories: ["WEB DEVELOPMENT","IOT","AUTOMATYZACJA"]
  },
  {
    id: 3,
    title: "Instalacja i montaż urządzeń SMART, do Twojego domu",
    client: "SMARTHOME",
    imageUrl: smarthome,
    categories: ["HOME ASSISTANT", "OPEN HUB"]
  },
  {
    id: 4,
    title: "Serwis sprzętu komputerowego",
    client: "SERWIS",
    imageUrl: serwer,
    categories: ["KONSERWACJA", "NAPRAWA", "WSPARCIE 24/7"]
  }
];

const OfferSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inicjalizacja AOS
  }, []);

  return (
    <Box sx={{ padding: theme.spacing(4), backgroundColor: theme.palette.background.primary }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: theme.palette.text.primary }} data-aos="fade-up">
        Oferta
      </Typography>
      
      <Grid container spacing={4}>
        {offerItems.map((item) => (
          <Grid item xs={12} sm={6} key={item.id} data-aos="fade-up">
            <Card sx={{ height: '100%', backgroundColor: theme.palette.background.secondary }}>
              <CardMedia
                component="img"
                height="200"
                image={item.imageUrl}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary }}>
                  {item.client}
                </Typography>
                <Typography variant="h6" sx={{ color: theme.palette.text.primary, marginBottom: 1 }}>
                  {item.title}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing(1) }}>
                  {item.categories.map((category, index) => (
                    <Chip
                      key={index}
                      label={category}
                      sx={{
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OfferSection;
