import React, { useState } from 'react';
import { Button, Card, Typography, IconButton, Box, Grid } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SecurityCameraIcon from '@mui/icons-material/Videocam';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SpeakerIcon from '@mui/icons-material/Speaker';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import WindowIcon from '@mui/icons-material/Window';
import PowerIcon from '@mui/icons-material/Power';
import SensorsIcon from '@mui/icons-material/Sensors';
import RouterIcon from '@mui/icons-material/Router';
import StorageIcon from '@mui/icons-material/Storage';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import theme from '../../theme';

const devices = [
    { name: 'Oświetlenie LED', price: 150, icon: <LightbulbIcon /> },
    { name: 'Kamera bezpieczeństwa', price: 300, icon: <SecurityCameraIcon /> },
    { name: 'Termostat', price: 400, icon: <ThermostatIcon /> },
    { name: 'Głośnik inteligentny', price: 250, icon: <SpeakerIcon /> },
    { name: 'Czujnik dymu', price: 100, icon: <SmokeFreeIcon /> },
    { name: 'Roleta inteligentna', price: 200, icon: <WindowIcon /> },
    { name: 'Gniazdko smart', price: 80, icon: <PowerIcon /> },
    { name: 'Czujnik ruchu', price: 120, icon: <SensorsIcon /> },
    { name: 'Przycisk smart', price: 50, icon: <PowerIcon /> },
    { name: 'Inteligentny router', price: 250, icon: <RouterIcon /> },
    { name: 'Serwer lokalny na pliki', price: 500, icon: <StorageIcon /> },
    { name: 'Panel sterujący smart home', price: 350, icon: <TabletAndroidIcon /> },
    { name: 'Komputer główny do Home Assistanta', price: 300, icon: <ComputerIcon /> },
  ];

const SelectSmartHome = () => {
  const [selectedDevices, setSelectedDevices] = useState({});

  const handleAdd = (deviceName) => {
    setSelectedDevices((prev) => ({
      ...prev,
      [deviceName]: Math.min((prev[deviceName] || 0) + 1, 20),
    }));
  };

  const handleRemove = (deviceName) => {
    setSelectedDevices((prev) => ({
      ...prev,
      [deviceName]: Math.max((prev[deviceName] || 0) - 1, 0),
    }));
  };

  const totalPrice = Object.entries(selectedDevices).reduce((acc, [name, quantity]) => {
    const device = devices.find((d) => d.name === name);
    return acc + (device?.price || 0) * quantity;
  }, 0);

  return (
    <Box sx={{ padding: 2, backgroundColor: theme.palette.background.primary }}>
      <Typography variant="h4" color="text.primary" gutterBottom>
        Wybierz urządzenia do Smart Home
      </Typography>
      
      <Grid container spacing={2}>
        {devices.map((device) => (
          <Grid item xs={12} sm={6} md={4} key={device.name}>
            <Card sx={{ padding: 2, backgroundColor: theme.palette.background.secondary }}>
              <Box display="flex" alignItems="center">
                <Box mr={1} color="text.primary">{device.icon}</Box>
                <Typography variant="h6" color="text.secondary">{device.name}</Typography>
              </Box>
              <Typography color="text.primary">Cena: {device.price} zł</Typography>
              
              <Box display="flex" alignItems="center" mt={1}>
                <IconButton 
                  onClick={() => handleRemove(device.name)} 
                  color="primary"
                  disabled={!selectedDevices[device.name]}
                >
                  <RemoveIcon />
                </IconButton>
                
                <Typography color="text.primary" mx={1}>
                  {selectedDevices[device.name] || 0}
                </Typography>
                
                <IconButton 
                  onClick={() => handleAdd(device.name)} 
                  color="primary"
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Summary */}
      <Box mt={4} p={2} style={{ backgroundColor: theme.palette.background.secondary, borderRadius: 8 }}>
        <Typography variant="h5" color="text.primary">Podsumowanie:</Typography>
        
        <Box mt={2}>
          {Object.entries(selectedDevices).map(([name, quantity]) => (
            quantity > 0 && (
              <Typography key={name} color="text.secondary">
                {name}: {quantity} sztuk - {devices.find((d) => d.name === name)?.price * quantity} zł
              </Typography>
            )
          ))}
        </Box>

        <Box mt={2} display="flex" justifyContent="space-between">
          <Typography variant="h6" color="text.primary">Suma:</Typography>
          <Typography variant="h6" color="text.primary">{totalPrice} zł</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectSmartHome;
