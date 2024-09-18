// src/pages/Dashboard.tsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom'; // Import Link
import useGlobalStore from '../store/useGlobal.ts'; // Import store
import { Item} from '../store/globalStyles.ts'; // Import Global Styles
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

const Dashboard: React.FC = () => {
  const colors = useGlobalStore((state) => state.colors);
  const logo = useGlobalStore((state) => state.logo);

  return (
    <Grid container direction="column" style={{ height: '97vh', margin: 0, background: 'linear-gradient(to bottom right, #f0f0f0, #e0e0e0)' }}>
      {/* Header */}
      <Grid>
        <Header/>
      </Grid>

      {/* Body */}
      <Container fixed style={{ flexGrow: 1, padding: '30px', alignContent:"center" }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid size={{ xs: 12, sm:6, md:4 }}>
            <Link to="/Header" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Item style={{ backgroundColor: colors.yellow, padding: '30px' }}>
                <Typography variant="h5" gutterBottom>
                  Peminjaman
                </Typography>
                <Box>
                  <img src={logo.checkOut} style={{ width: '100px', margin: '10px' }} />
                </Box>
              </Item>
            </Link>
          </Grid>

          <Grid size={{ xs: 12, sm:6, md:4 }}>
            <Link to="/Pengembalian" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Item style={{ backgroundColor: colors.gray, padding: '30px' }}>
                <Typography variant="h5" gutterBottom>
                  Pengembalian
                </Typography>
                <Box>
                  <img src={logo.checkIn} style={{ width: '100px', margin: '10px' }} />
                </Box>
              </Item>
            </Link>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
