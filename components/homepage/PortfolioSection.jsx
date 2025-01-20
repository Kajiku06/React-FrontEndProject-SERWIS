import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { GitHub } from '@mui/icons-material';
import theme from '../../theme';

const PortfolioSection = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
        padding: theme.spacing(4),
        backgroundColor: `${theme.palette.background.primary}CC`,  
        boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.3)`,
        
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: theme.palette.text.primary }}>
        Portfolio
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: theme.spacing(2), color: theme.palette.text.secondary }}>
      Poznaj moje projekty i zobacz moje pełne portfolio lub zajrzyj na GitHub.
      </Typography>

      <Box sx={{ display: 'flex', gap: theme.spacing(2), marginTop: theme.spacing(2) }}>
        <Button
          variant="contained"
          startIcon={<GitHub />}
          href="https://github.com/Kajiku06" 
          target="_blank"
          sx={{
            backgroundColor: theme.palette.primary.primary,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          GitHub
        </Button>

        <Button
          variant="outlined"
          component={Link}
          to="/portfolio"
          sx={{
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            '&:hover': {
              borderColor: theme.palette.primary.dark,
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          Zobacz Portfolio
        </Button>
      </Box>
    </Box>
  );
};

export default PortfolioSection;
