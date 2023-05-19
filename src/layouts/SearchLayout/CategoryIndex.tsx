import { useHits } from "react-instantsearch-hooks-web";
import React, { useMemo, useState, useEffect } from "react";
import CustomHits from "./HitsLayout";

import { Index } from "react-instantsearch-hooks-web";
import { Container, Grid, Typography, Divider, Box } from "@mui/material";

import MyRefinementList from "./CustomRefinementList";
function CategoryIndex({
  props,
  cardType,
  indexName,
  refinementLists,
  title,
}: any) {
  const { hits, results, sendEvent } = useHits();
  const [numHits, setNumHits] = useState(10);

  return (
    <>
      {1 > 0 ? (
        <Index indexName={indexName}>
          <Box sx={{ width: "100%" }}>
            <Divider
              flexItem
              sx={{ width: "100%", fontSize: "30px", color: "#5ab1bb" }}
            >
              {title}
            </Divider>
          </Box>
          <Container maxWidth="xl" sx={{ marginY: 3 }}>
            <Grid container columnSpacing={2}>
              <Grid item xs={12} sm={4} md={3}>
                <Grid container>
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
              <Grid item xs={12} sm={8} md={9}>
                <CustomHits cardType={cardType} setNumHits={setNumHits} />
              </Grid>
            </Grid>
          </Container>
        </Index>
      ) : null}
    </>
  );
}
export default CategoryIndex;
