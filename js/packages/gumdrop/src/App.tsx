import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

import { Header } from './components/Header/Header';
import { Claim } from './components/Claim';
import { Close } from './components/Close';
import { Create } from './components/Create';

const routes = (
  <Switch>
    <Route exact path="/create" component={Create} />
    <Route exact path="/claim" component={() => <Redirect to="/" />} />
    <Route exact path="/close" component={Close} />
    <Route exact path="/" component={Claim} />
  </Switch>
);

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

// eslint-disable-next-line
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions(),
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#07061e',
    },
  },
});

function App() {
  const { width } = useWindowDimensions();

  return (
    <div className="App" style={{ backgroundColor: 'transparent' }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Header narrow={width < 670} />
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              width: '100%',
              height: '100vh',
              backgroundImage:
                'url(https://assets.website-files.com/619c7e3bffe78eb124124e0f/61cc52c14b268def6e03a37b_Mask%20Group%2038.png)',
              zIndex: -1,
            }}
            className="what"
          />
          <Box
            maxWidth="60ch"
            width="calc(100% - 60px)"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Box height="40px" />
            {routes}
            <Box height="80px" />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
