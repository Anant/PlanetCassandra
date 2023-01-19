import React from 'react'
import Navigation from '../Navigation/Navigation';

import { Container, Grid } from '@mui/material'

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default Layout