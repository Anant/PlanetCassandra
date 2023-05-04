// searchPage.tsx
import React, { useState, useCallback, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useSearchValueContext } from "../context/SearchContext";
import algoliasearch from "algoliasearch";
import SearchResultGrid from "../layouts/SearchLayout/SearchResultGrid";
import { InstantSearch, Index, SearchBox } from "react-instantsearch-dom";
import {
  Chip,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import { connectHits } from "react-instantsearch-core";
import { connectSearchBox } from "react-instantsearch-core";
import SearchIcon from "@mui/icons-material/Search";

const CATEGORY_USECASES = "usecases";
const CATEGORY_POSTS = "posts";
const CATEGORY_NEWS = "news";
const CATEGORY_LINKS = "links";

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

//@ts-ignore
const CustomSearchInput = ({ currentRefinement, refine }) => {
  const handleChange = (event: { target: { value: any } }) => {
    refine(event.target.value);
  };

  return (
    <InputBase
      sx={{
        marginLeft: 1,
        flex: 1,
      }}
      placeholder="Search Planet Cassandra"
      inputProps={{ "aria-label": "Search Planet Cassandra" }}
      value={currentRefinement}
      onChange={handleChange}
    />
  );
};

const ConnectedCustomSearchInput = connectSearchBox(CustomSearchInput);

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

  const ConnectedSearchResultGrid = connectHits(SearchResultGrid);

  const [refreshCount, setRefreshCount] = useState(0);

  const handleRefresh = () => {
    setRefreshCount(refreshCount + 1);
  };

  return (
    <Layout>
      <Grid container>
        <InstantSearch
          indexName="PlanetCassandraPosts"
          searchClient={searchClient}
          searchState={{ query }}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <Container>
            <Grid container spacing={2} paddingTop="20px">
              <Grid item xs={4}>
                <CategoryLink
                  category={CATEGORY_POSTS}
                  currentCategory={category}
                  onClick={handleCategoryChange}
                >
                  Posts
                </CategoryLink>
                {/* <CategoryLink
                  category={CATEGORY_USECASES}
                  currentCategory={category}
                  onClick={handleCategoryChange}
                >
                  Use Cases
                </CategoryLink> */}
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
                <Paper
                  component="form"
                  sx={{
                    padding: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <ConnectedCustomSearchInput />
                  <IconButton
                    type="submit"
                    sx={{ padding: 1 }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>
          </Container>

          {category == CATEGORY_POSTS && (
            <Index indexName="PlanetCassandraPosts">
              <ConnectedSearchResultGrid
                cardType="post"
                refreshCount={refreshCount}
                onRefresh={handleRefresh}
              />
            </Index>
          )}

          {category == CATEGORY_NEWS && (
            <Index indexName="PlanetCassandraNews">
              <ConnectedSearchResultGrid
                cardType="news"
                refreshCount={refreshCount}
                onRefresh={handleRefresh}
              />
            </Index>
          )}

          {category == CATEGORY_LINKS && (
            <Index indexName="PlanetCassandraLeaves">
              <ConnectedSearchResultGrid
                cardType="leaf"
                refreshCount={refreshCount}
                onRefresh={handleRefresh}
              />
            </Index>
          )}

          {/* {category == CATEGORY_USECASES && (
            <Index indexName="PlanetCassandraUseCases">
              <ConnectedSearchResultGrid
                cardType="usecases"
                refreshCount={refreshCount}
                onRefresh={handleRefresh}
              />
            </Index>
          )} */}
        </InstantSearch>
      </Grid>
    </Layout>
  );
};

export default SearchPage;
