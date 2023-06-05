import React, { useState } from "react";
import Layout from "../components/Layout/Layout";

//@ts-ignore
import { Helmet } from "react-helmet";
import CategoryIndex from "../layouts/SearchLayout/CategoryIndex";
import { InstantSearch } from "react-instantsearch-hooks-web";
import algoliasearch from "algoliasearch";
import CustomSearchBox from "../layouts/SearchLayout/CustomSearchBox";
import { Container } from "@mui/material";

const Companies: React.FC<any> = () => {
  const [query, setQuery] = useState("");
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
  );
  return (
    <Layout>
      <Helmet>
        <title>Use Cases - Planet Cassandra</title>
        <meta property="og:image" content="../images/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={"Planet Cassandra"} />
        <meta
          name="keywords"
          content="Cassandra use cases, data-driven solutions, IoT, e-commerce, analytics"
        />
        <meta
          name="description"
          content="Discover various use cases for Cassandra database on Planet Cassandra. Learn how Cassandra is being used in real-world applications for data-driven solutions, including IoT, e-commerce, analytics, and more."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://planetcassandra.org/",
            "@type": "WebPage",
            name: "Use Cases - Planet Cassandra",
            keywords:
              "Cassandra use cases, data-driven solutions, IoT, e-commerce, analytics",
            author: {
              "@type": "Organization",
              name: "Use Cases - Planet Cassandra",
            },
          })}
        </script>
        {/* Open Graph */}
        <meta property="og:title" content={"Use Cases - Planet Cassandra"} />
        <meta
          property="og:description"
          content="Explore various use cases for Cassandra database on Planet Cassandra. Learn how Cassandra is being used in real-world applications for data-driven solutions, including IoT, e-commerce, analytics, and more."
        />
        {/* Other meta tags you may consider adding */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Use Cases - Planet Cassandra"} />
        <meta name="twitter:image" content={"../../images/icon.png"} />
      </Helmet>
      <Container maxWidth="xl" sx={{ marginY: 3 }}>
        <InstantSearch
          indexName="PlanetCassandraUseCases"
          searchClient={searchClient}
          insights
        >
          <CustomSearchBox
            placeholderText={"Search Use Cases"}
            defaultQuery={query}
            setDefaultQuery={setQuery}
          />
          <CategoryIndex
            category={"usecases"}
            cardType={"usecases"}
            indexName={"PlanetCassandraUseCases"}
            title={"Use Cases"}
            hideTitle={true}
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
        </InstantSearch>
      </Container>
    </Layout>
  );
};

export default Companies;
