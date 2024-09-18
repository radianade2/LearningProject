// src/pages/Pengembalian.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import unitedTractorsImage from '../assets/beruang.png'; // Gambar United Tractors

const Pengembalian: React.FC = () => {
  return (
    <Box style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Company United Tractors
      </Typography>
      <img src={unitedTractorsImage} alt="United Tractors" style={{ width: '100%', borderRadius: '8px' }} />
      <Typography variant="body1" style={{ marginTop: '20px' }}>
        United Tractors adalah perusahaan yang bergerak di bidang distribusi alat berat dan memiliki berbagai lini bisnis lainnya.
      </Typography>
    </Box>
  );
};

export default Pengembalian;