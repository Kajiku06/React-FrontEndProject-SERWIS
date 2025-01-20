import React, { useState } from "react";
import { Box, Button, Typography, Grid, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles"; // Importujemy hook dla tematu

const FullScreenDropdown = () => {
  const theme = useTheme(); // Uzyskujemy dostęp do Twojego tematu
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <Box>
      {/* Przycisk "Oferta" */}
      <Button
        onClick={toggleDropdown}
        sx={{
          textDecoration: 'none',
          fontWeight: 600,
          color: theme.palette.link.main,
          fontSize: "18px", // Większy rozmiar tekstu
          textTransform: "none",
          padding: "12px 24px",
        }}
      >
        OFERTA
      </Button>

      {/* Rozwijane menu */}
      {isDropdownVisible && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Slightly transparent black background
            zIndex: 1000,
            overflowY: "auto",
            padding: "40px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Przycisk zamknięcia */}
          <Button
            onClick={toggleDropdown}
            sx={{
              position: "absolute",
              top: "20px",
              right: "20px",
              color: theme.palette.text.primary, // Kolor tekstu z tematu
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            X
          </Button>

          {/* Tytuł i treść menu */}
          <Box sx={{ maxWidth: "1200px", width: "100%", marginTop: "60px" }}>
            <Grid container spacing={4}>
              {/* Serwery */}
              <Grid item xs={12} sm={6} md={4}>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: "16px",
                    fontWeight: "bold",
                    color: theme.palette.text.primary,
                    fontSize: "22px",
                  }}
                >
                  SERWERY
                </Typography>
                <Divider
                  sx={{
                    marginBottom: "16px",
                    backgroundColor: theme.palette.primary.main, // Kolor separatora
                  }}
                />
                <Box>
                  <Typography
                    component={Link}
                    to="/offer/servers"
                    sx={{
                      color: theme.palette.link.main, // Kolor linków
                      textDecoration: "none",
                      display: "block",
                      marginBottom: "12px",
                      fontSize: "18px", // Większy rozmiar tekstu
                      "&:hover": { color: theme.palette.link.hover },
                    }}
                  >
                    Montaż serwera do domu lub biura
                  </Typography>
                  </Box>
              </Grid>

              {/* Separator */}
              <Grid item xs={12}>
                <Divider
                  sx={{
                    margin: "16px 0",
                    backgroundColor: theme.palette.primary.main,
                  }}
                />
              </Grid>

              {/* Grafika i programowanie */}
              <Grid item xs={12} sm={6} md={4}>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: "16px",
                    fontWeight: "bold",
                    color: theme.palette.text.primary,
                    fontSize: "22px",
                  }}
                >
                  GRAFIKA & PROGRAMOWANIE
                </Typography>
                <Divider
                  sx={{
                    marginBottom: "16px",
                    backgroundColor: theme.palette.primary.main,
                  }}
                />
                <Box>
                  <Typography
                    component={Link}
                    to="/offer/web-development"
                    sx={{
                      color: theme.palette.link.main,
                      textDecoration: "none",
                      display: "block",
                      marginBottom: "12px",
                      fontSize: "18px",
                      "&:hover": { color: theme.palette.link.hover },
                    }}
                  >
                    Tworzenie i rozwój aplikacji
                  </Typography>
                  <Typography
                    component={Link}
                    to="/offer/iot"
                    sx={{
                      color: theme.palette.link.main,
                      textDecoration: "none",
                      display: "block",
                      marginBottom: "12px",
                      fontSize: "18px",
                      "&:hover": { color: theme.palette.link.hover },
                    }}
                  >
                    Internet Rzeczy (IoT)
                  </Typography>
                </Box>
              </Grid>

              {/* Separator */}
              <Grid item xs={12}>
                <Divider
                  sx={{
                    margin: "16px 0",
                    backgroundColor: theme.palette.primary.main,
                  }}
                />
              </Grid>

              {/* Automatyka & Smart Home */}
              <Grid item xs={12} sm={6} md={4}>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: "16px",
                    fontWeight: "bold",
                    color: theme.palette.text.primary,
                    fontSize: "22px",
                  }}
                >
                  AUTOMATYZACJA & SMART HOME
                </Typography>
                <Divider
                  sx={{
                    marginBottom: "16px",
                    backgroundColor: theme.palette.primary.main,
                  }}
                />
                <Box>
                  <Typography
                    component={Link}
                    to="/offer/smart-home"
                    sx={{
                      color: theme.palette.link.main,
                      textDecoration: "none",
                      display: "block",
                      marginBottom: "12px",
                      fontSize: "18px",
                      "&:hover": { color: theme.palette.link.hover },
                    }}
                  >
                    Instalacja i montaż urządzeń SMART
                  </Typography>
                </Box>
              </Grid>

              {/* Separator */}
              <Grid item xs={12}>
                <Divider
                  sx={{
                    margin: "16px 0",
                    backgroundColor: theme.palette.primary.main,
                  }}
                />
              </Grid>

              {/* Serwis sprzętu */}
              <Grid item xs={12} sm={6} md={4}>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: "16px",
                    fontWeight: "bold",
                    color: theme.palette.text.primary,
                    fontSize: "22px",
                  }}
                >
                  SERWIS
                </Typography>
                <Divider
                  sx={{
                    marginBottom: "16px",
                    backgroundColor: theme.palette.primary.main,
                  }}
                />
                <Box>
                  <Typography
                    component={Link}
                    to="/offer/serwis"
                    sx={{
                      color: theme.palette.link.main,
                      textDecoration: "none",
                      display: "block",
                      marginBottom: "12px",
                      fontSize: "18px",
                      "&:hover": { color: theme.palette.link.hover },
                    }}
                  >
                    Serwis sprzętu komputerowego
                  </Typography>
                  <Typography
                    component={Link}
                    to="/offer/naprawa"
                    sx={{
                      color: theme.palette.link.main,
                      textDecoration: "none",
                      display: "block",
                      marginBottom: "12px",
                      fontSize: "18px",
                      "&:hover": { color: theme.palette.link.hover },
                    }}
                  >
                    Naprawa sprzętu
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FullScreenDropdown;