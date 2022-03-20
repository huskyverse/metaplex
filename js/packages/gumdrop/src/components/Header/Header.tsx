import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Container } from '@mui/material';

import { Settings } from '../Settings';

export const Header = ({ narrow }: { narrow: boolean }) => {
  return (
    <Container sx={{ paddingTop: '30px' }}>
      <Box
        sx={{
          height: '52px',
          display: 'flex',
          overflow: 'auto',
        }}
      >
        <Link to="/">
          <Box sx={{ paddingTop: '7px', paddingLeft: '15px' }}>
            <Avatar src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/23f5TH1tFkfX6jPVQNy4VQ66Fo32WUc8zrZT1c14LzBM/logo.png" />
          </Box>
        </Link>
        <Box sx={{ flexGrow: 1, minWidth: '36px' }}></Box>
        <Settings narrow={narrow} />
      </Box>
    </Container>
  );
};
