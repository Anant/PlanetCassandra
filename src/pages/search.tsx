// searchPage.tsx
import React, { useState, useCallback, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useSearchValueContext } from "../context/SearchContext";
import algoliasearch from "algoliasearch";
//@ts-ignore
import { Helmet } from "react-helmet";
import {
  InstantSearch,
  RefinementList,
  Index,
} from "react-instantsearch-hooks-web";

import { Chip, Container, Grid, Typography, Divider, Box } from "@mui/material";

import CustomHits from "../layouts/SearchLayout/HitsLayout";
import CustomSearchBox from "../layouts/SearchLayout/CustomSearchBox";
import MyRefinementList from "../layouts/SearchLayout/CustomRefinementList";
const CATEGORY_USECASES = "usecases";
const CATEGORY_POSTS = "posts";
const CATEGORY_NEWS = "news";
const CATEGORY_LINKS = "links";
const CATEGORY_ALL = "all";

//@ts-ignore
const CategoryLink = ({ category, currentCategory, onClick, children }) => (
  <Chip
    label={children}
    clickable
    color={category === currentCategory ? "primary" : "default"}
    onClick={() => onClick(category)}
    style={{ marginRight: "0.5rem" }}
  />
);

const SearchPage: React.FC = () => {
  const { searchValue } = useSearchValueContext();

  const [query, setQuery] = useState(searchValue);
  const [category, setCategory] = useState(CATEGORY_POSTS); // Set default category here

  // Load the selected category from localStorage when the component is mounted
  useEffect(() => {
    const storedCategory = localStorage.getItem("selectedCategory");

    if (storedCategory) {
      setCategory(JSON.parse(storedCategory));
    }
  }, []);

  // Store the selected category in localStorage when the category changes
  useEffect(() => {
    localStorage.setItem("selectedCategory", JSON.stringify(category));
  }, [category]);

  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
  );

  const handleCategoryChange = useCallback(
    (category: React.SetStateAction<string>) => {
      setCategory(category);
    },
    []
  );

  return (
    <Layout>
      <Helmet>
        <title>Search - Planet Cassandra</title>
        <meta property="og:image" content="../images/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={"Search - Planet Cassandra"} />
        <meta name="author" content={"Planet Cassandra"} />
        {/* <meta
          name="keywords"
          content="Cassandra events, database conferences, webinars, meetups, NoSQL database community"
        />
        <meta
          name="description"
          content="Stay updated with the latest events and happenings related to Cassandra database on Planet Cassandra. Discover upcoming events, conferences, webinars, meetups, and other activities related to Cassandra and NoSQL database community."
        />
        <meta
          property="og:description"
          content="Stay updated with the latest events and happenings related to Cassandra database on Planet Cassandra. Discover upcoming events, conferences, webinars, meetups, and other activities related to Cassandra and NoSQL database community."
        /> */}
      </Helmet>
      <Grid container>
        <InstantSearch
          indexName="PlanetCassandraUseCases"
          searchClient={searchClient}
          insights
          // searchState={{ query }}
          // onSearchStateChange={({ query }) => setQuery(query)}
        >
          <Container maxWidth="xl">
            <Grid container spacing={2} paddingTop="20px">
              <Grid item xs={12}>
                <CategoryLink
                  category={CATEGORY_ALL}
                  currentCategory={category}
                  onClick={handleCategoryChange}
                >
                  All
                </CategoryLink>
                <CategoryLink
                  category={CATEGORY_POSTS}
                  currentCategory={category}
                  onClick={handleCategoryChange}
                >
                  Posts
                </CategoryLink>
                <CategoryLink
                  category={CATEGORY_USECASES}
                  currentCategory={category}
                  onClick={handleCategoryChange}
                >
                  Use Cases
                </CategoryLink>
                <CategoryLink
                  category={CATEGORY_NEWS}
                  currentCategory={category}
                  onClick={handleCategoryChange}
                >
                  News
                </CategoryLink>
                <CategoryLink
                  category={CATEGORY_LINKS}
                  currentCategory={category}
                  onClick={handleCategoryChange}
                >
                  Links
                </CategoryLink>
              </Grid>
              <Grid item xs={12}>
                <CustomSearchBox
                  defaultQuery={query}
                  setDefaultQuery={setQuery}
                />
              </Grid>
            </Grid>
          </Container>

          {category == CATEGORY_POSTS || category === CATEGORY_ALL ? (
            <Index indexName="PlanetCassandraPosts">
              <Box sx={{ width: "100%" }}>
                <Divider
                  flexItem
                  sx={{ width: "100%", fontSize: "30px", color: "#5ab1bb" }}
                >
                  Posts
                </Divider>
              </Box>
              <Container maxWidth="xl" sx={{ marginY: 3 }}>
                <Grid container columnSpacing={2}>
                  <Grid item xs={12} sm={4} md={3}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "1.25rem",
                            fontFamily: "Roboto Condensed, sans-serif",
                          }}
                        >
                          Author
                        </Typography>

                        <MyRefinementList
                          attribute="author.node.name" // optional parameters
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "1.25rem",
                            fontFamily: "Roboto Condensed, sans-serif",
                          }}
                        >
                          Tags
                        </Typography>

                        <MyRefinementList
                          attribute="tags.nodes.name" // optional parameters
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "1.25rem",
                            fontFamily: "Roboto Condensed, sans-serif",
                          }}
                        >
                          Categories
                        </Typography>

                        <MyRefinementList
                          attribute="categories.nodes.name" // optional parameters
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <CustomHits cardType="post" />
                  </Grid>
                </Grid>
              </Container>
            </Index>
          ) : null}

          {category === CATEGORY_NEWS || category === CATEGORY_ALL ? (
            <Index indexName="PlanetCassandraNews">
              <Box sx={{ width: "100%" }}>
                <Divider
                  flexItem
                  sx={{ width: "100%", fontSize: "30px", color: "#5ab1bb" }}
                >
                  News
                </Divider>
              </Box>

              <Container maxWidth="xl" sx={{ marginY: 3 }}>
                <Grid container justifyContent="flex-end">
                  <Grid
                    item
                    xs={12}
                    sm={category === CATEGORY_ALL ? 8 : 12}
                    md={category === CATEGORY_ALL ? 9 : 12}
                  >
                    <CustomHits cardType="news" />
                  </Grid>
                </Grid>
              </Container>
            </Index>
          ) : null}

          {category == CATEGORY_LINKS || category === CATEGORY_ALL ? (
            <Index indexName="PlanetCassandraLeaves">
              <Box sx={{ width: "100%" }}>
                <Divider
                  flexItem
                  sx={{ width: "100%", fontSize: "30px", color: "#5ab1bb" }}
                >
                  Links
                </Divider>
              </Box>
              <Container maxWidth="xl" sx={{ marginY: 3 }}>
                <Grid container columnSpacing={2}>
                  <Grid item xs={12} sm={4} md={3}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "1.25rem",
                            fontFamily: "Roboto Condensed, sans-serif",
                          }}
                        >
                          Tags
                        </Typography>

                        <MyRefinementList
                          attribute="tags" // optional parameters
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "1.25rem",
                            fontFamily: "Roboto Condensed, sans-serif",
                          }}
                        >
                          Domain
                        </Typography>

                        <MyRefinementList
                          attribute="domain_name" // optional parameters
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <CustomHits cardType="leaf" />
                  </Grid>
                </Grid>
              </Container>
            </Index>
          ) : null}

          {category == CATEGORY_USECASES || category === CATEGORY_ALL ? (
            <Index indexName="PlanetCassandraUseCases">
              <Box sx={{ width: "100%" }}>
                <Divider
                  flexItem
                  sx={{ width: "100%", fontSize: "30px", color: "#5ab1bb" }}
                >
                  Use Cases
                </Divider>
              </Box>
              <Container maxWidth="xl" sx={{ marginY: 3 }}>
                <Grid container columnSpacing={2}>
                  <Grid item xs={12} sm={4} md={3}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "1.25rem",
                            fontFamily: "Roboto Condensed, sans-serif",
                          }}
                        >
                          Function
                        </Typography>

                        <MyRefinementList
                          attribute="data.Case_Function.data.Function_Name" // optional parameters
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "1.25rem",
                            fontFamily: "Roboto Condensed, sans-serif",
                          }}
                        >
                          Stack
                        </Typography>

                        <MyRefinementList
                          attribute="data.Case_Stack.data.Name" // optional parameters
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "1.25rem",
                            fontFamily: "Roboto Condensed, sans-serif",
                          }}
                        >
                          Industry
                        </Typography>
                        <MyRefinementList
                          attribute="data.Case_Industry.data.Industry_Name" // optional parameters
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <CustomHits cardType="usecases" />
                  </Grid>
                </Grid>
              </Container>
            </Index>
          ) : null}
        </InstantSearch>
      </Grid>
    </Layout>
  );
};

export default SearchPage;
