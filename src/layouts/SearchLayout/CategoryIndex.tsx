import React, { useState } from "react";
import CustomHits from "./HitsLayout";

import { Index } from "react-instantsearch-hooks-web";
import { Container, Grid, Divider, Box } from "@mui/material";

import MyRefinementList from "./CustomRefinementList";
function CategoryIndex({
  props,
  cardType,
  indexName,
  refinementLists,
  title,
  category,
}: any) {
  const [numHits, setNumHits] = useState(10);

  return (
    <Box
      sx={{
        width: "100%",
        display: numHits === 0 && category === "all" ? "none" : "block",
      }}
    >
      <Index indexName={indexName}>
        <Box sx={{ width: "100%", display: numHits === 0 ? "none" : "block" }}>
          <Divider
            flexItem
            sx={{
              width: "100%",
              fontSize: "30px",
              color: "#5ab1bb",
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 700,
            }}
          >
            {title}
          </Divider>
        </Box>
        <Container maxWidth="xl" sx={{ marginY: 3 }}>
          <Grid container columnSpacing={2}>
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              sx={{ display: category === "news" ? "none" : "block" }}
            >
              <Grid
                container
                sx={{ display: numHits === 0 ? "none" : "block" }}
              >
                {refinementLists
                  ? refinementLists?.map((refinement: any) => (
                      <Grid item xs={12} key={refinement.attribute}>
                        <MyRefinementList
                          label={refinement.label}
                          attribute={refinement.attribute}
                        />
                      </Grid>
                    ))
                  : null}
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={category === "news" ? 12 : 8}
              md={category === "news" ? 12 : 9}
            >
              <CustomHits cardType={cardType} setNumHits={setNumHits} />
            </Grid>
          </Grid>
        </Container>
      </Index>
    </Box>
  );
}
export default CategoryIndex;
