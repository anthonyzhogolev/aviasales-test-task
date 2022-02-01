import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import store from './slices/index'
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#2196F3",
        light: "#F1FCFF"
      },
      text: {
        primary: "#4A4A4A",
        secondary: "#A0B0B9",
      },
    },
  });


  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <Box sx={{ display: "flex", columnGap: "20px", flexDirection: 'row' }}>
              <Sidebar />
              <MainContent />
            </Box>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  );

}

export default App;
