// src/pages/Peminjaman.tsx
import { Box, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import useGlobalStore from '../store/useGlobal.ts'; // Import store
import { Header, Footer } from '../store/globalStyles.ts'; // Import Global Styles


const Peminjaman = () => {
  const colors = useGlobalStore((state) => state.colors);
  const logo = useGlobalStore((state) => state.logo);

  return (
    <Grid container direction="column" style={{ height: '97vh', margin: 0, background: 'linear-gradient(to bottom right, #f0f0f0, #e0e0e0)' }}>
      {/* Header */}
      <Grid>
        <Header style={{ backgroundColor: colors.yellow }}>
          <img src={logo.logoCompany} style={{ width: '100px', marginRight: '10px' }} />
          <Typography variant="h5">Header Section</Typography>
        </Header>
      </Grid>

      {/* Body */}
      <Grid>
        <Box>
          <Paper component="form" sx={{display:"flex", alignItems:"center", borderRadius:"default", p:1, background: 'linear-gradient(to bottom right, #f0f0f0, #e0e0e0)', border:"none"}}>
            xcvfdvfdbgb
          </Paper>
        </Box>
      </Grid>

      {/* Footer */}
      <Grid>
        <Footer style={{ backgroundColor: colors.black, color: colors.white }}>
          <Typography variant="h5">Footer Section</Typography>
        </Footer>
      </Grid>
    </Grid>
  );
};

export default Peminjaman;