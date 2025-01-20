import React, { useEffect } from 'react';
import { Box, Card, CardContent, Avatar, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AOS from 'aos'; // Importujemy AOS
import 'aos/dist/aos.css'; // Importujemy style AOS

const TeamSection = () => {
  const theme = useTheme();

  const teamMembers = [
    {
      name: 'Kazimierz Kiper',
      role: 'Specjalista IT',
      description: 'Kazimierz specjalizuje się w pisaniu oprogramowania oraz w montażu serwerów, zapewniając płynność działania naszej infrastruktury.',
      imageUrl: 'https://your-image-url.com/kazimierz.jpg',
    },
    {
      name: 'Rozalia Nowak',
      role: 'Copywriter',
      description: 'Rozalia łączy pasję do pisania z projektowaniem interfejsów użytkownika, dbając o wygodę i estetykę naszych produktów.',
      imageUrl: 'https://your-image-url.com/rozalia.jpg',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inicjujemy AOS
  }, []);

  return (
    <Box
      sx={{
        padding: '4rem 2rem',
        backgroundColor: theme.palette.background.secondary,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.text.primary,
          marginBottom: '2rem',
          fontWeight: 'bold',
        }}
        data-aos="fade-up" // Animacja dla tytułu
      >
        Nasz Zespół
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            data-aos="fade-up" // Animacja dla każdej karty
            data-aos-delay={`${index * 100}`} // Opóźnienie animacji dla każdej karty
          >
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: theme.palette.background.primary,
                boxShadow: 3,
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 200,
                  backgroundColor: theme.palette.background.secondary,
                }}
              >
                <Avatar
                  src={member.imageUrl}
                  alt={member.name}
                  sx={{
                    width: 120,
                    height: 120,
                    border: `4px solid ${theme.palette.background.primary}`,
                  }}
                />
              </Box>

              <CardContent sx={{ padding: '1rem', textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    marginTop: '1rem',
                    lineHeight: 1.6,
                    fontSize: '0.9rem',
                  }}
                >
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
