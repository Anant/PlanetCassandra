import React, { useState, useEffect } from "react";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { Helmet } from "react-helmet";
import { Chip, Container, Grid } from "@mui/material";

import Layout from "../components/Layout/Layout";
import { useSearchValueContext } from "../context/SearchContext";
import algoliasearch from "algoliasearch";

import CustomSearchBox from "../layouts/SearchLayout/CustomSearchBox";
import CategoryIndex from "../layouts/SearchLayout/CategoryIndex";

const CATEGORY_USECASES = "usecases";
const CATEGORY_POSTS = "posts";
const CATEGORY_NEWS = "news";
const CATEGORY_LINKS = "links";
const CATEGORY_ALL = "all";

interface CategoryLinkProps {
  category: string;
  currentCategory: string;
  onClick: (category: string) => void;
  children: React.ReactNode;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({
  category,
  currentCategory,
  onClick,
  children,
}) => (
  <Chip
    label={children}
    clickable
    color={category === currentCategory ? "primary" : "default"}
    onClick={() => onClick(category)}
    style={{ marginRight: "0.5rem" }}
  />
);

const categoryData = [
  { category: CATEGORY_ALL, label: "All" },
  { category: CATEGORY_POSTS, label: "Posts" },
  { category: CATEGORY_USECASES, label: "Use Cases" },
  { category: CATEGORY_NEWS, label: "News" },
  { category: CATEGORY_LINKS, label: "Links" },
];

const SearchPage: React.FC = (props) => {
  const { searchValue } = useSearchValueContext();
  const [query, setQuery] = useState(searchValue);
  const [category, setCategory] = useState<string>(CATEGORY_POSTS);

  useEffect(() => {
    const storedCategory = localStorage.getItem("selectedCategory");
    if (storedCategory) {
      setCategory(JSON.parse(storedCategory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedCategory", JSON.stringify(category));
  }, [category]);

  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
  );

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  return (
    <Layout>
      <Helmet>
        <title>Search - Planet Cassandra</title>
        <meta property="og:image" content="../images/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={"Search - Planet Cassandra"} />
        <meta name="author" content={"Planet Cassandra"} />
      </Helmet>
      <Grid container>
        <InstantSearch
          indexName="PlanetCassandraUseCases"
          searchClient={searchClient}
          insights
        >
          <Container maxWidth="xl">
            <Grid container spacing={2} paddingTop="20px">
              <Grid item xs={12}>
                {categoryData.map((data) => (
                  <CategoryLink
                    key={data.category}
                    category={data.category}
                    currentCategory={category}
                    onClick={handleCategoryChange}
                  >
                    {data.label}
                  </CategoryLink>
                ))}
              </Grid>
              <Grid item xs={12}>
                <CustomSearchBox
                  defaultQuery={searchValue}
                  setDefaultQuery={setQuery}
                />
              </Grid>
            </Grid>
          </Container>
          {(category === CATEGORY_USECASES || category === CATEGORY_ALL) && (
            <CategoryIndex
              cardType={"usecases"}
              indexName={"PlanetCassandraUseCases"}
              title={"Use Cases"}
              refinementLists={[
                {
                  attribute: "data.Case_Function.data.Function_Name",
                  label: "Function",
                },
                { attribute: "data.Case_Stack.data.Name", label: "Stack" },
                {
                  attribute: "data.Case_Industry.data.Industry_Name",
                  label: "Industry",
                },
              ]}
            />
          )}
          {(category === CATEGORY_POSTS || category === CATEGORY_ALL) && (
            <CategoryIndex
              cardType={"post"}
              indexName={"PlanetCassandraPosts"}
              title={"Posts"}
              refinementLists={[
                { attribute: "author.node.name", label: "Author" },
                { attribute: "tags.nodes.name", label: "Tags" },
                { attribute: "categories.nodes.name", label: "Categories" },
              ]}
            />
          )}
          {(category === CATEGORY_NEWS || category === CATEGORY_ALL) && (
            <CategoryIndex
              cardType={"news"}
              indexName={"PlanetCassandraNews"}
              title={"News"}
              refinementLists={[]}
            />
          )}
          {(category === CATEGORY_LINKS || category === CATEGORY_ALL) && (
            <CategoryIndex
              cardType={"leaf"}
              indexName={"PlanetCassandraLeaves"}
              title={"Links"}
              refinementLists={[
                { attribute: "tags", label: "Tags" },
                { attribute: "domain_name", label: "Domain" },
              ]}
            />
          )}
        </InstantSearch>
      </Grid>
    </Layout>
  );
};

export default SearchPage;
