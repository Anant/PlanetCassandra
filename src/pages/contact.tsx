import React, { useState } from "react";
import { Grid, Typography, Container, Box, Avatar } from "@mui/material";
import Layout from "../components/Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import HeroBanner from "../images/EventsBg.png";
import PcShirt from '../images/PCTshirt.png'
import CustomForm from "../components/Forms/CustomForm";
// import JotformEmbed from "react-jotform-embed";

const ContactUs: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact - Planet Cassandra</title>
        <meta name="author" content={"Planet Cassandra"} />
        <meta
          name="description"
          content="Get in touch with Planet Cassandra for all your Cassandra database needs and queries. We provide expert guidance and support to help you optimize your Cassandra database implementation."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://planetcassandra.org/",
            "@type": "WebPage",
            name: "Contact - Planet Cassandra",
            keywords: "Contact - Planet Cassandra",
            author: {
              "@type": "Organization",
              name: "Contact - Planet Cassandra",
            },
          })}
        </script>
        {/* Open Graph */}
        <meta property="og:title" content={"Contact - Planet Cassandra"} />
        <meta
          property="og:description"
          content={
            "Get in touch with Planet Cassandra for all your Cassandra database needs and queries. We provide expert guidance and support to help you optimize your Cassandra database implementation."
          }
        />
        <meta
          property="og:image"
          content="https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
        />

        {/* Other meta tags you may consider adding */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Contact - Planet Cassandra"} />
        <meta
          name="twitter:description"
          content="Get in touch with Planet Cassandra for all your Cassandra database needs and queries. We provide expert guidance and support to help you optimize your Cassandra database implementation."
        />

        <meta
          name="twitter:image"
          content="https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
        />
      </Helmet>
      <Box
        sx={{
          paddingInline: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundImage: `url(${HeroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingY: 2,  // Reducing padding
          height: "65vh"
        }}
      >
        <Container maxWidth="xl" sx={{ padding: 6 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h1"
                fontFamily="Montserrat"
                sx={{
                  color: "#FFF",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontSize: 40,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "131.5%",
                  letterSpacing: "1.2px",
                }}
              >
                Will they find the
                <span style={{
                  fontWeight: 700,
                  letterSpacing: "-2.4px"
                }}> knowledge </span>
                they are
                <span style={{
                  color: "#5AB1BB",
                  fontWeight: 700,
                  letterSpacing: "-2.8px"
                }}> looking for?</span>
              </Typography>
              <Typography
                sx={{
                  marginTop: { xs: 5, sm: 2, lg: 5 },
                  color: "#FFF",
                  fontSize: { xs: 16, sm: 10, md: 22 },
                }}
                fontFamily="Roboto Condensed, sans-serif"
                fontWeight={400}
              >
                Calling all contributors! If you've got a passion for sharing your knowledge and skills, here's your chance.
              </Typography>
              <Typography
                sx={{
                  marginTop: { xs: 5, sm: 2, lg: 5 },
                  color: "#FFF",
                  fontSize: { xs: 16, sm: 10, md: 22 },
                }}
                fontFamily="Roboto Condensed, sans-serif"
                fontWeight={400}
              >
                Fill out the form below and let us know you’d like to contribute. Your expertise could help build a better community and build your recognition. We’ll contact you and come up with something that fits in a way you can contribute.
              </Typography>
              <Typography
                sx={{
                  marginTop: { xs: 5, sm: 2, lg: 5 },
                  color: "#FFF",
                  fontSize: { xs: 16, sm: 10, md: 22 },
                }}
                fontFamily="Roboto Condensed, sans-serif"
                fontWeight={400}
              >
                Get ready to join the group of Planet Cassandra contributors and claim your free Planet Cassandra Contributor T-shirt!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={PcShirt} alt="Planet Cassandra T-Shirt" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ padding: 6 }}>
        <Box my={4}>
          <Grid container spacing={3}>
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
                {/* <iframe
                  title="Contact us"
                  src={"https://form.jotform.com/231082464101342"}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                ></iframe> */}
                <CustomForm />
              </Box>
            </Grid>


            <Grid item xs={12} sm={6}>
              <Typography
                variant="h1"
                fontFamily="Montserrat"
                sx={{
                  color: "#344D67",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontSize: 40,
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "131.5%",
                  letterSpacing: "1.2px",
                }}
              >
                What you need to do?
              </Typography>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, paddingTop: 6 }}>
                <Avatar style={{ backgroundColor: "#5AB1BB", color: "white", width: 49, height: 49 }}>
                  1
                </Avatar>
                <Box>
                  <Typography
                    sx={{
                      color: "#161616",
                      fontSize: 25,
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      lineHeight: "131.5%",
                      letterSpacing: "0.75px",
                    }}
                  >
                    Fill out the Form
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: 1,
                      color: "#344D67",
                      fontSize: 22,
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      lineHeight: "131.5%",
                      letterSpacing: "0.66px",
                    }}
                  >
                    Complete the form below to express your interest in contributing content to Planet Cassandra
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, paddingTop: 6 }}>
                <Avatar style={{ backgroundColor: "#5AB1BB", color: "white", width: 49, height: 49 }}>
                  2
                </Avatar>
                <Box>
                  <Typography
                    sx={{
                      color: "#161616",
                      fontSize: 25,
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      lineHeight: "131.5%",
                      letterSpacing: "0.75px",
                    }}
                  >
                    Submit Your Contribution
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: 1,
                      color: "#344D67",
                      fontSize: 22,
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      lineHeight: "131.5%",
                      letterSpacing: "0.66px",
                    }}
                  >
                    Share your valuable contribution, such as a use case, article, video, or tutorial, once you are contacted by the Planet Cassandra editorial team
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, paddingTop: 6 }}>
                <Avatar style={{ backgroundColor: "#5AB1BB", color: "white", width: 49, height: 49 }}>
                  3
                </Avatar>
                <Box>
                  <Typography
                    sx={{
                      color: "#161616",
                      fontSize: 25,
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      lineHeight: "131.5%",
                      letterSpacing: "0.75px",
                    }}
                  >
                    Get Your T-Shirt
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: 1,
                      color: "#344D67",
                      fontSize: 22,
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      lineHeight: "131.5%",
                      letterSpacing: "0.66px",
                    }}
                  >
                    As a token of appreciation for your contribution to our community, we’ll send you a Planet Cassandra Contributor t-shirt upon acceptance of your submission.
                  </Typography>
                </Box>
              </Box>
            </Grid>



          </Grid>
        </Box>
      </Container>

    </Layout>
  );
};
export default ContactUs;
