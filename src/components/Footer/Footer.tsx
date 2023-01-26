import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import "../Footer/index.css";
import { Input } from "antd";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  const { Search } = Input;

  return (
    <Grid className="bgImage" sx={{ backgroundColor: "gray" }}>
      <Container>
        <Grid
          sx={{
            height: 700,
          }}
          justifyContent="center"
          alignItems="center"
          container
          maxWidth="lg"
        >
          <Grid item xs={12} md={6}>
            <StaticImage
              src="../../images/GrayLogoWithText.png"
              alt="A dinosaur"
              placeholder="blurred"
              height={60}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 5,
                width: "60%",
              }}
            >
              <Typography color={"white"}>What's New?</Typography>
              <Typography color={"white"}>Events</Typography>
              <Typography color={"white"}>Use Cases</Typography>
            </Box>
            <Typography
              sx={{
                marginTop: 5,
              }}
              color="#5AB1BB"
              variant="subtitle1"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              saepe fugiat architecto, ut dolor labore eum quod animi magnam
              sapiente, iure deserunt ipsa eligendi tenetur autem earum maxime
              rem nam.
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                marginTop: 10,
              }}
              color={"white"}
              variant="subtitle1"
            >
              All logos, trademarks and registered trademarks are the property
              of their respective owners.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#5AB1BB",
                padding: 3,
                borderRadius: 5,
                width: "50%",
                margin: "auto",
              }}
            >
              <Typography marginBottom={2} variant="h4" color={"white"}>
                Stay Tuned!
              </Typography>
              <Typography variant="subtitle2" color={"white"}>
                Sign up to our newsletter and never miss out on anything related
                to Cassandra.
              </Typography>
              <Typography variant="subtitle2" color={"white"}>
                Our newsletter is sent once a week, every Thursday
              </Typography>
              <Search
                style={{ marginTop: 10 }}
                placeholder="Email Adress..."
                enterButton={<AiOutlineSend />}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
