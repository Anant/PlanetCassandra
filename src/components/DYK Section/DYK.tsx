import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";

const DidYouKnowSection = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#5AB1BB",
      }}
      container
    >
      <Container
        sx={{
          paddingY: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            color={"white"}
            align={"center"}
            variant="h5"
            gutterBottom
          >
            Did You
          </Typography>
          <Typography marginX={1} align={"center"} variant="h5" gutterBottom>
            Know?
          </Typography>
        </Box>

        <Typography align={"center"} variant="subtitle2" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          voluptate ipsa voluptatibus accusamus nobis nostrum doloribus quidem
          aut provident est neque debitis quos minima, error deleniti ipsum
          commodi culpa facilis.
        </Typography>
      </Container>
    </Grid>
  );
};

export default DidYouKnowSection;
