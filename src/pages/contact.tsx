import React, { useState } from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
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
              <Typography
                variant="h1"
                fontFamily="Poppins, sans-serif"
                sx={{
                  color: '#1E1E1E',
                  fontSize: { xs: 30, sm: 45, xl: 60 },
                  fontWeight: 400,
                }}>
                Get in Touch
              </Typography>  
              <Typography
                sx={{
                  marginTop: { xs: 5, sm: 2, lg: 5 },
                  color: "#383D3B",
                  fontSize: { xs: 16, sm: 10, md: 22 },
                }}
                fontFamily="Roboto Condensed, sans-serif"
                fontWeight={400}
              >
                If you have any questions, comments, or suggestions
                about Planet Cassandra or our community, please don't 
                hesitate to get in touch with us using the contact form. 
                
                We value your feedback and are always eager to hear 
                from members of our community. Thank you for your 
                interest in Planet Cassandra, 
                and we look forward to connecting with you!

                <StaticImage
                src="../images/contactUs_half.jpg"
                alt="Contact Us Image"
                placeholder="blurred"
                layout="fullWidth"
                style={{ borderRadius: "50px" }}
                />
              </Typography>              
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
                  width="100%" 
                  frameBorder="0" 
                  scrolling="no"
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
