import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "../Layout/Layout.css";
import { Grid } from "@mui/material";


interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Grid item className="footerBgImage">
      <Footer  />
      </Grid>
    </>
  );
};

export default Layout;
