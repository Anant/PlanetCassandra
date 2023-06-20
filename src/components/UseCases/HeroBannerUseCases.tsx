import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button, Modal } from "@mui/material";
import HeroBanner from "../../images/HeroBannerUseCases.png";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
type Props = {};

function HeroBannerUseCases({}: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "70%", md: "50%" },
    height: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <iframe
            src={process.env.USE_CASES_AIRTABLE_FORM}
            width="100%"
            height="100%"
          ></iframe>
        </Box>
      </Modal>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundImage: `url(${HeroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingY: 4,
        }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: 42,
                  marginBottom: 3,
                }}
              >
                Use Cases Catalog
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                }}
              >
                The Use Cases Catalog offers a collection of real-life examples
                that demonstrate how our solutions are applied in different
                situations.
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  marginTop: 2,
                }}
              >
                Whether you're seeking inspiration or researching potential
                applications, our Use Case repository is a valuable resource to
                explore the diverse possibilities of our solutions and their
                real-world impact.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                justifyContent: "start",
                alignItems: "end",
                display: "flex",
                flexDirection: "column",
                width: "50%",
              }}
            >
              <Box
                sx={{
                  textAlign: { xs: "start", sm: "end" },
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <StaticImage
                  height={30}
                  width={30}
                  src="../../images/icon.png"
                  alt="Illustration Image"
                />
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: 14,
                    marginTop: 2,
                  }}
                >
                  Want to submit your own use case on Planet Cassandra and
                  contribute to the community?
                </Typography>
                <Button
                  sx={{
                    marginTop: 2,
                    borderRadius: 2,
                    marginBottom: 2,

                    backgroundColor: "#283B4F",
                  }}
                  onClick={handleOpen}
                  variant="contained"
                >
                  Add New Use Case{" "}
                </Button>
                <Link to={"/contribute"}>
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: 12,
                      marginTop: 1,
                      cursor: "pointer",
                    }}
                  >
                    You can also explore more ways to contribute.
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default HeroBannerUseCases;
