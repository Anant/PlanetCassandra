import React, { useState } from "react";
import { Grid, Container, Box } from "@mui/material";
import Layout from "../components/Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
// import JotformEmbed from "react-jotform-embed";

const ContactUs: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth="xl" sx={{ padding: 6 }}>
        <Box my={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StaticImage
                src="../images/contactUs.jpg"
                alt="Contact Us Image"
                placeholder="blurred"
                layout="fullWidth"
                style={{ borderRadius: "50px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "& iframe": {
                    height: "471px !important",
                    margin: "0px !important",
                  },
                }}
              >
                {/* <JotformEmbed src="https://form.jotform.com/231082464101342" /> */}
                <iframe
                  title="Contact us"
                  src={"https://form.jotform.com/231082464101342"}
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};
export default ContactUs;
