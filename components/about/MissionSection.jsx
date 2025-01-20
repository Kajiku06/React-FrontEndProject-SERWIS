import React, { useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AOS from 'aos'; // Importujemy AOS
import 'aos/dist/aos.css'; // Importujemy style AOS

const MissionSection = () => {
  const theme = useTheme(); // Pobieramy motyw

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inicjujemy AOS
  }, []);

  return (
    <Paper
    sx={{
      padding: '4rem 2rem',
      backgroundColor: theme.palette.background.secondary,
      textAlign: 'center',
    }}
    >
      <Box>
        {/* Tytuł */}
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.text.primary, // Kolor tytułu
            marginBottom: '1.5rem', // Odstęp od treści
            fontWeight: 'bold',
            textAlign: 'center', // Wyśrodkowanie tytułu
          
          }}
          data-aos="fade-up" // Animacja dla tytułu
        > 
          Nasza Misja
        </Typography>
        
        {/* Treść */}
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary, // Kolor tekstu
            lineHeight: 1.6, // Interlina dla lepszej czytelności
            fontSize: '1rem', // Standardowy rozmiar tekstu
            maxWidth: '700px', // Maksymalna szerokość tekstu
            margin: '0 auto', // Wyśrodkowanie tekstu
            textAlign: 'center', // Wyśrodkowanie tekstu
          }}
          data-aos="fade-up" // Animacja dla tekstu
        >
          Jesteśmy grupą studentów, którzy pasjonują się technologią i chcą wykorzystać swoje umiejętności, aby pomagać w rozwoju innowacyjnych rozwiązań technologicznych. Naszym celem jest tworzenie rozwiązań, które przyczyniają się do poprawy jakości życia ludzi, takich jak zarządzanie i oszczędzanie energii, zwiększanie bezpieczeństwa, oraz wspieranie wszelkich inicjatyw, które mogą przynieść korzyści społeczne. Wierzymy, że technologia ma ogromny potencjał, aby poprawić naszą codzienność i przynieść pozytywne zmiany na świecie.
        </Typography>
      </Box>
    </Paper>
  );
};

export default MissionSection;
