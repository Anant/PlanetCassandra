import './src/styles/global.css';
import React from 'react';
import { SearchValueProvider } from './src/context/SearchContext';
import { GatsbyBrowser } from 'gatsby';
import theme from './src/components/Theme/Theme';
import { ThemeProvider } from '@mui/material';

const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <SearchValueProvider>{element}</SearchValueProvider>
    </ThemeProvider>
  );
};

export { wrapRootElement };
