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
  const [category, setCategory] = useState<string>(CATEGORY_ALL);

  useEffect(() => {
    const storedCategory = localStorage.getItem("selectedCategory");
    if (storedCategory) {
      setCategory(JSON.parse(storedCategory));
    }
  }, [searchValue]);

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
        <meta name="author" content={"Planet Cassandra"} />
        <meta
          name="description"
          content="Search the Planet Cassandra website for the latest news, tutorials, and resources about Cassandra, the distributed NoSQL database. Find articles, guides, and community discussions to enhance your Cassandra expertise."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://planetcassandra.org/",
            "@type": "WebPage",
            name: "Search - Planet Cassandra",
            keywords: "Planet Cassandra search",
            author: {
              "@type": "Organization",
              name: "Search - Planet Cassandra",
            },
          })}
        </script>
        {/* Open Graph */}
        <meta property="og:title" content={"Search - Planet Cassandra"} />
        <meta
          property="og:description"
          content="Search the Planet Cassandra website for the latest news, tutorials, and resources about Cassandra, the distributed NoSQL database. Find articles, guides, and community discussions to enhance your Cassandra expertise."
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
        <meta name="twitter:title" content={"Search - Planet Cassandra"} />
        <meta
          name="twitter:description"
          content="Search the Planet Cassandra website for the latest news, tutorials, and resources about Cassandra, the distributed NoSQL database. Find articles, guides, and community discussions to enhance your Cassandra expertise."
        />
        <meta
          name="twitter:image"
          content="https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
        />
      </Helmet>
      <Container maxWidth="xl" sx={{ marginY: 2 }}>
        <Grid container>
          <InstantSearch
            indexName="PlanetCassandraUseCases"
            searchClient={searchClient}
            insights
          >
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
                  placeholderText={"Search Planet Cassandra"}
                  defaultQuery={searchValue}
                  setDefaultQuery={setQuery}
                />
              </Grid>
            </Grid>
            {(category === CATEGORY_USECASES || category === CATEGORY_ALL) && (
              <CategoryIndex
                category={category}
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
                category={category}
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
                category={category}
                cardType={"news"}
                indexName={"PlanetCassandraNews"}
                title={"News"}
                refinementLists={[]}
              />
            )}
            {(category === CATEGORY_LINKS || category === CATEGORY_ALL) && (
              <CategoryIndex
                category={category}
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
      </Container>
    </Layout>
  );
};

export default SearchPage;
