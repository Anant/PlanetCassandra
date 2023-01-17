import React from 'react'
import Navigation from '../Navigation/Navigation';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div>
    <Navigation />
    {children}
  </div>
)

export default Layout