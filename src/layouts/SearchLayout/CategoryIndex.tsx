import React, { useState } from "react";
import CustomHits from "./HitsLayout";

import { Index, Pagination } from "react-instantsearch-hooks-web";
import { Container, Grid, Divider, Box } from "@mui/material";

import MyRefinementList from "./CustomRefinementList";
function CategoryIndex({
  props,
  cardType,
  indexName,
  refinementLists,
  title,
  category,
  hideTitle,
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
        <Box
          sx={{
            width: "100%",
            display: numHits === 0 || hideTitle ? "none" : "block",
          }}
        >
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
        <Box sx={{ marginY: 3 }}>
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
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              item
              xs={12}
              sm={category === "news" ? 12 : 8}
              md={category === "news" ? 12 : 9}
            >
              <CustomHits cardType={cardType} setNumHits={setNumHits} />
              <Pagination padding={2} />
            </Grid>
          </Grid>
        </Box>
      </Index>
    </Box>
  );
}
export default CategoryIndex;
