import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  Grid2,
  ThemeProvider,
} from '@mui/material';
import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../store/store';
import NavBar from './NavBar';
import SideBar from './SideBar';

/**
 * @name App
 * @description Main application layout component
 * @constructs ThemeProvider, CssBaseline, NavBar, Outlet
 * @returns {JSX.Element}
 */
function App() {
  const { darkMode } = useAppSelector((state) => state.ui);

  const palletType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: palletType === 'light' ? '#f4f4f4' : '#1e1e1e',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />

      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode
            ? 'radial-gradient(circle, #1e1e1e, #111B27)'
            : 'radial-gradient(circle, #f4f4f4, #f0f9ff)',
          py: 6,
        }}
      >
        <Container maxWidth='xl' sx={{ mt: 8 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={2}>
              <SideBar />
            </Grid2>
            <Grid2 size={10}>
              <Outlet />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
