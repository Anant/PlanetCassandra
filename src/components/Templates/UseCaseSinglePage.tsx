import React from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import { Container, Typography } from "@mui/material";
import Layout from "../Layout/Layout";
import "./singlePageTemplates.css";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { BaseGridProps } from "../../layouts/SinglePageLayout/BaseGrid";
import UseCaseGrid from "../../layouts/SinglePageLayout/UseCaseGrid";
import "../../components/Layout/Layout.css";
import "./singlePageTemplates.css";

interface UseCasesSinglePageProps {
  pageContext: {
    id: string;
    title: string;
    Description: string;
    Case_Article_Content: string;
    Case_Published: string;
    Case_URL: string;
    Case_Stack: {
      data: {
        Name: string;
      }[];
    };
    Case_Function: {
      data: {
        Function_Name: string;
      }[];
    };
    Case_Industry: {
      data: {
        Industry_Name: string;
      }[];
    };
    RelatedArticles: Array<{
      Company: any;
      Case_Published: string;
      Case_URL: string;
      Case_Name: string;
      gatsbyImageData: IGatsbyImageData | null;
    }>;
    gatsbyImageData: IGatsbyImageData | null;
    Company: string;
  };
}

const UseCasesSinglePage: React.FC<UseCasesSinglePageProps> = (props) => {
  const {
    pageContext: {
      id,
      title,
      Description,
      Case_Article_Content,
      RelatedArticles,
      Company,
      gatsbyImageData,
      Case_Published,
      Case_URL,
      Case_Stack,
      Case_Function,
      Case_Industry,
    },
  } = props;
  const mapUseCasesToProps = (
    useCasesProps: UseCasesSinglePageProps
  ): BaseGridProps => {
    return {
      singlePage: {
        title,
        description: Description,
        content: Case_Article_Content,
        thumbnail: gatsbyImageData,
        //@ts-ignore
        routePrefix: props.routePrefix,
        id, // Add the missing id property
        url: Case_URL, // Add the missing url property for UseCases
        domain_name: Case_URL, // Add the missing domain_name property
        wallabag_created_at: Case_Published, // Add the date
        published_by: Company,
        Case_Stack, // Pass the Case_Stack
        Case_Function, // Pass the Case_Function
        Case_Industry,
      },
      relatedArticles: RelatedArticles.map((relatedArticle) => ({
        ...relatedArticle,
        title: relatedArticle.Case_Name, // Add the missing title property for UseCases
        thumbnail: relatedArticle.gatsbyImageData,
        published_by: relatedArticle.Company,
        wallabag_created_at: relatedArticle.Case_Published, // Add the date
        url: relatedArticle.Case_URL,
      })),
    };
  };
  const baseGridProps = mapUseCasesToProps(props);

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="keywords" content={title} />
        <meta name="author" content={Company} />

        {/* <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://planetcassandra.org/",
            "@type": "WebPage",
            name: title,
            description: title,
            keywords: title,
            author: {
              "@type": "Organization",
              name: title,
            },
          })}
        </script> */}
        {/* Open Graph */}
        {/* <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta
          property="og:image"
          content={
            "https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
          }
        /> */}

        {/* Other meta tags you may consider adding */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> */}

        {/* Twitter Card */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={title} />
        <meta
          name="twitter:image"
          content={
            "https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
          }
        /> */}
      </Helmet>
      <UseCaseGrid
        singlePage={baseGridProps.singlePage}
        relatedArticles={baseGridProps.relatedArticles}
      />
    </Layout>
  );
};

export default UseCasesSinglePage;
